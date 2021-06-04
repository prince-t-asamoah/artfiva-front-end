const samePass = (values) => {
    if (values.password === values.cpassword) {
        return {
            msg: "Password same"
        }
    }
    else {
        return {
            msg: "Passowrd not same"
        }
    }
}

export default samePass;