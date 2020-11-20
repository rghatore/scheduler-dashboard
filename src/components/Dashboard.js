import React, { Component } from "react";

import classnames from "classnames";
import Loading from './Loading';
import Panel from './Panel';

// fake data
const data = [
  {
    id: 1,
    label: "Total Interviews",
    value: 6
  },
  {
    id: 2,
    label: "Least Popular Time Slot",
    value: "1pm"
  },
  {
    id: 3,
    label: "Most Popular Day",
    value: "Wednesday"
  },
  {
    id: 4,
    label: "Interviews Per Day",
    value: "2.3"
  }
];

// function panels(items) {
//   items.map(item => {
//     const { id, label, value } = item;
//     return <Panel key={id} id={id} label={label} value={value} />
//   });
// }
// console.log(label)
// return <Panel key={items[0].id} label={items[0].label} value={items[0].value} />

class Dashboard extends Component {

  state = {
    loading: false,
    focused: null
  };

  selectPanel(id) {
    // if(!this.state.focused) {
    //   this.setState({ focused: id });
    // } else {
    //   this.setState({ focused: null });
    // }
    this.setState(previousState => ({
      focused: previousState.focused !== null ? null : id
    }));
  }

  render() {
    const dashboardClasses = classnames("dashboard", {
      "dashboard--focused": this.state.focused
    });

    if (this.state.loading) {
      return <Loading />;
    }

    const panels = data
      .filter(
        panel => this.state.focused === null || this.state.focused === panel.id
      )
      .map(panel => (
        <Panel
          key={panel.id}
          // id={panel.id}
          label={panel.label}
          value={panel.value}
          onSelect={event => this.selectPanel(panel.id)}
        />
      ));

    return <main className={dashboardClasses}>
      {/* {panels(data)} */}
      {panels}
    </main>;

  }
}

/* functional equavalent
// function Dashboard(props) {
//   const dashboardClasses = classnames("dashboard");
//   // return <main className={dashboardClasses} />;
//       return <main className={dashboardClasses}>
//       <h1>HELLO</h1>
//     </main>;
// }
*/
export default Dashboard;
