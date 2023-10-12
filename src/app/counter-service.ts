

export class CounterService{
    activeToInactive = 0;
    inactiveToActive = 0;

    updateActiveToInactive(){
        this.activeToInactive++;
        alert(`Updated active to inactive.  Current value: ${this.activeToInactive}`)
    }


    updateInactiveToActive(){
        this.inactiveToActive++;
        alert(`Updated inactive to active.  Current value: ${this.inactiveToActive}`)
    }
}