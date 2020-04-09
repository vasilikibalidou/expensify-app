export default expenses => {
    return expenses.reduce((acc, val) => {
        return acc + val.amount
    }, 0)
}

