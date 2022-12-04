const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб']
const giveParcel = () => {
  for (let i = 0; i < 3; i++) {
     let personGot = peopleWaiting.shift()
     alert(`${personGot} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек`)
  }
  return
}
const leaveQueueWithoutParcel = () => {
  for (let i = 0; i < 4; i++){
    let personLeft = peopleWaiting.shift()
    alert(`${personLeft} не получил(а) посылку и ушёл(ла) домой`)
  }
  return
}
const total1 = giveParcel()
const total2 = leaveQueueWithoutParcel()


