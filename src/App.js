import React, { Component } from 'react'
import SideBar from './sidebar/index'
import LoginPage from './login/index'
import CourseInfoPage from './course-info/index'
import './index.css'
import { Route } from 'react-router'

const contentWrapperStyle = {
    marginLeft: '15%',
}

/* const LongLorem = () => (
    <div style={{height: '200vh'}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, eaque? Recusandae, repellendus omnis cum cumque nesciunt aliquid qui ullam soluta nobis. Impedit, atque voluptatem incidunt fuga quasi praesentium dolores aut.
        Laborum mollitia eius natus saepe expedita temporibus deserunt at! Doloremque fuga ut laudantium suscipit sit illo! Iusto laborum magni reiciendis tempora sunt repellat voluptatum ipsam id, ut aliquid ducimus culpa!
        Enim incidunt excepturi non harum nam, autem hic vitae fuga id, cum, totam inventore magnam voluptatem ex quas assumenda explicabo. Ratione quae tempore doloremque voluptatem eum. Cum magni ratione placeat.
        Aliquam aspernatur dolore quo sunt esse magnam iste quisquam nostrum, aperiam, consectetur maiores minima autem dolorum aut incidunt voluptates! Corrupti non quasi culpa itaque tempora aperiam pariatur alias recusandae delectus!
        Odit voluptate facilis aliquid rerum inventore earum exercitationem harum quis blanditiis voluptates facere iste laudantium, repudiandae quisquam doloremque fuga aliquam error sit tempora dicta dolores, necessitatibus adipisci modi. Fuga, ipsum.
        Dolores iure aliquid facere natus eum facilis, magni possimus consectetur labore amet neque nam. Provident nulla beatae sint fugiat id minima velit quisquam! Tempora, provident quam qui ab reprehenderit cumque.
        Iste dolorum possimus nihil nam ea quae laudantium quibusdam placeat! Aliquid aspernatur minus asperiores unde eveniet dolorem, aperiam saepe numquam dolor autem delectus possimus laborum, perferendis impedit. Laudantium, incidunt tempora.
        Sint, laborum? Fuga, ipsa consectetur! Recusandae odio adipisci eaque provident dolor rem autem iste fugiat, dolores saepe repellendus et. Eos tempora dolor veritatis alias maiores at culpa? Amet, aspernatur nihil!
        Eius, nostrum at tempora nisi excepturi, dolorem, et laborum deleniti repellendus dolorum sequi ex voluptatibus praesentium veritatis dicta quis architecto aliquid quaerat soluta omnis ullam tempore consequatur necessitatibus voluptate. Maxime.
        Rem perferendis voluptatem nobis ipsum, maxime magnam nisi natus, delectus sapiente rerum quos id dolores eius dolor vel, eligendi ad reprehenderit dignissimos soluta aperiam enim cupiditate mollitia explicabo. Tenetur, quos?
    </div>
) */

const ContentWrapper = ({children}) => (
    <div style={contentWrapperStyle}>
        {children}
    </div>
)

class App extends Component {
    render() {
        return (
            <div>
                <SideBar />
                <ContentWrapper>
                    <Route exact path="/" component={LoginPage} />
                    <Route path="/courseinfo" component={CourseInfoPage} />
                </ContentWrapper>
            </div>
        )
    }
}

export default App;
