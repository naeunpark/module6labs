export function SingleCat(props){
    return (
        <>
        <li>
            <img src={props.image} alt={props.name} />
            <strong>{props.name}</strong>({props.latinName})
        </li>
        </>
    )
}

export function BigCats(){
    const cats = [
        { id:1 ,name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'https://images.indianexpress.com/2023/05/Cheetah-death.jpg' },
        { id:2 ,name: 'Cougar', latinName: 'Puma concolor', image: 'https://gvzoo.com/cms-data/gallery/blog/animals/cougar/cougar1.jpg' },
        { id:3 ,name: 'Jaguar', latinName: 'Panthera onca', image:  'https://upload.wikimedia.org/wikipedia/commons/0/0a/Standing_jaguar.jpg'},
        { id:4 ,name: 'Leopard', latinName: 'Panthera pardus', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/African_leopard_male_%28cropped%29.jpg/1200px-African_leopard_male_%28cropped%29.jpg' },
        { id:5 ,name: 'Lion', latinName: 'Panthera leo',  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg'},
        { id:6 ,name: 'Snow leopard', latinName: 'Panthera uncia', image: 'https://cdn.britannica.com/52/170952-050-A545E35D/carnivore-Snow-leopard-regions-subcontinent-Asia-Indian.jpg' },
        { id:7 ,name: 'Tiger', latinName: 'Panthera tigris', image: 'https://files.worldwildlife.org/wwfcmsprod/images/Tiger_mother_and_cubs_Ranthambhore_national_park_India/story_full_width/objzha7dm_Medium_WW251528.jpg' },
       ];

    let cat = cats.map((cat)=> (
        <SingleCat key={cat.id} name={cat.name} latinName={cat.latinName} image={cat.image}></SingleCat>
    ))
       return (
        <ul>
            {cat}
        </ul>
       )

}