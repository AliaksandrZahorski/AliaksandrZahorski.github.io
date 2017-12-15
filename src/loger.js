let logerStore = null;
export const logerInit = store => {
  logerStore = store;
};

const loger = () =>{
  console.log('loger', logerStore.getState());
};

export default loger;
