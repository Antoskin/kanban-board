

class TheTime {
    convertTime(i) {
        return i < 10 ? `0${i}` : i 
    }
    getTime() {
        const timer = new Date()
        const h = this.convertTime(timer.getHours())
        const m = this.convertTime(timer.getMinutes())
        const s = this.convertTime(timer.getSeconds())

        const tt = `${h}: ${m}: ${s}`

        return tt
    }
}
   

export default TheTime