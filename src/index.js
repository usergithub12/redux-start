import store from "./store";
import { bugAdded, bugRemoved, bugResolved } from "./actions";

const unsunbscribe = store.subscribe(() => {
  console.log("Store changed", store.getState());
});

store.dispatch(bugAdded("bug1"));
store.dispatch(bugResolved(1));
//unsunbscribe();
store.dispatch(bugRemoved(1));

//console.log(store);

// import React, { Component } from "react";
// export class App extends Component {
//   state = {
//     bugs: [
//       {
//         id: 1,
//         description: "",
//         resolved: false,
//       },
//     ],
//     currentUser: {},
//   };

//   render() {
//     return <div></div>;
//   }
// }

// export default App;
