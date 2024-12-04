export const getAge = () => {
    fetch("/generate_age_based_dist",{
        method: 'post',
        body: ""
    }).then((res) => res.json()).then((data) => localStorage.setItem("age",JSON.stringify(data))).catch(error => localStorage.setItem("age-error",error))
}