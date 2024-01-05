let object = [{id: 1, status: "completed"},
 {id: 2, status: "remaining"},
  {id: 3, status: "remaining"},
   {id: 4, status: "completed"}];

let find_id = object.find((ids) => {
    if (ids.id == 2) {
        ids.status = "completed";
        return ids.id + ids.status;
    }
})
console.log(find_id);