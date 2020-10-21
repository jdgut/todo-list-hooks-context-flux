const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
      tasks: [
        {
          label: 'do groceries',
          done: false,
        },
        {
          label: 'go jogging',
          done: false,
        }
      ],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
    },
    //this is where we'll set our fetch
		actions: {
			addTask: (newTask) => {
				const store = getStore();
				let newList = [
						...store.tasks,
						{
							label : newTask,
							done  : false
						}
					];
					//then we change Store
					setStore({
						tasks: newList
					})
			},
      getToDoList: () => {
        
      },
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
