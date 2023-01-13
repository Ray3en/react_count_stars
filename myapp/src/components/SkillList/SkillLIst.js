import SkillItem from "../SkillItem/SkillItem"
import './SkillList.css'

// Массив data, которые перечисляет все скилы, передвая количество ЗВЕЗД как параметр в компонент SkillItem

let data = [
    {id: 1, title: 'HTML', url: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_256.png', count_stars: 4},
    {id: 2, title: 'CSS', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png', count_stars: 5},
    {id: 3, title: 'JS', url: 'https://e7.pngegg.com/pngimages/602/440/png-clipart-javascript-open-logo-number-js-angle-text.png', count_stars: 4},
    {id: 4, title: 'React', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png', count_stars: 2},
]


function SkillList(){
    return (
        <div className="skill_wrapper">
            {data.map(elem => 
                <SkillItem 
                    title = {elem.title} 
                    url = {elem.url} 
                    count_stars = {elem.count_stars}
                    key = {elem.id}
                />
            )}
        </div>
    )
}

export default SkillList