enum Status {
  OFFLINE,// 1
  ONLINE,// 2
  DELETE// 3
}
console.log(Status.OFFLINE); // 1
console.log(Status[1]); // OFFLINE
console.log(Status[2]); // ONLINE

function getStatus (status) {
  if (status === Status.OFFLINE) {
    return 'offline'
  } else if (status === Status.ONLINE) {
    return 'online'
  } else if (status === Status.DELETE) {
    return 'delete'
  }
}

const res = getStatus(1)
console.log(res) // offline