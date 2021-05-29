import emitter from "./eventEmitter";

let deletedItemsStore = [];

emitter.addListener("itemDeleted", function (x) {
  deletedItemsStore.push(x);
});
export default deletedItemsStore;
