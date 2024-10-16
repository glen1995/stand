import * as timer from './scripts/handleTime';

timer.setRecursiveTime(50).then(() => { console.log("data is set"); }).catch((err) => { console.log(err); });
timer.getRecursiveTime().then((data) => { console.log(data); });