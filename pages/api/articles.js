
export default function handler(req, res){
    const articles = [
        {
            id:'1',
            title:'Prvi Clanak',
            content:'Ovo je prvi clanak',
            category:'tehnologija'
        },
        {
            id:'2',
            title:'Drugi Clanak',
            content:'Ovo je prvi clanak',
            category:'vesti'
        },
        {
            id:'3',
            title:'Treci Clanak',
            content:'Ovo je treci clanak',
            category:'tehnologija'
        },
        {
            id:'4',
            title:'Cetvrti Clanak',
            content:'Ovo je cetvrti clanak',
            category:'hrana'
        },
        {
            id:'5',
            title:'Peti Clanak',
            content:'Ovo je peti clanak',
            category:'tehnologija'
        },
        {
            id:'6',
            title:'Sesti Clanak',
            content:'Ovo je sesti clanak',
            category:'sport'
        },
    ]
    res.status(200).json(articles)
}
