import './SkillItem.css'
// import stars_img from './stars.jpeg' 

function SkillItem(props){
    const {title, url, count_stars} = props
    console.log(url)

    // Функуия generateStars генерирурет массив из 5 элементов для того, чтобы изобразить 5 иконок, импортируемые в разметку (см index.html)
    // Каждый элемент массива по условию (передаваемого в компонент параметра count_stars) генерирует CSS класс для каждой звезды, формируя на выходе
    // последовательность активных и не активных звезд

    function generateStars(num){
        let array = []
        for(let i = 0; i < 5; i++){
           if (num > i){
            array.push('fa fa-star active')
           } else {
            array.push('fa fa-star')
           }
        }
        return array
    }

    // stars_data хранит результат работы функции generateStars
    let stars_data = generateStars(count_stars)

    return (
        <div className='skill_elem'>
            <img src={url} width='100' height='100'/>
            <p>{title}</p>
            <p>{count_stars}</p>
            <div className='stars_wrapper'>
                {stars_data.map(elem => <span className={elem}></span>)}
            </div>
        </div>
    )
}  

export default SkillItem

