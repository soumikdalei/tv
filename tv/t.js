const form=document.querySelector('#searchform')
form.addEventListener('submit',async(e)=>{
e.preventDefault();
const searchterm=form.elements.query.value
const response=await axios.get(`https://api.tvmaze.com/search/shows?q=${searchterm}`)
console.log(response.data)
makeimages(response.data)
form.elements.query.value=""
})
const makeimages=(shows)=>{
    for(let result of shows){
        if(result.show.image){
        const img=document.createElement("IMG")
       img.src=result.show.image.medium
       document.body.append(img)}
    }
}