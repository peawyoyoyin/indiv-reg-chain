import React, { Component } from 'react'
import AuthenticationBox from './authentication'
import styled from 'styled-components'

const TopBarDiv = styled.div`
    padding-top: 1em;
    padding-bottom: 1em;
    background-color: #A5E7F7;
    margin-bottom: 1.5em;
    margin: 0;
`

const TopBar = () => (
    <TopBarDiv>
        <span style={{fontSize: '1.25em'}}>ข้อมูลรายวิชา</span>
    </TopBarDiv>
)

const LoginInfoBoxDiv = styled.div`
    padding: 1em;
    background-color: royalblue;
    margin: 1.5em 0em 3em 9em;
    border-radius: 5px;
    width: 65%;
`

const LoginInfoContentDiv = styled.div`
    padding: 1em;
`

const LoginInfoBox = () => (
    <LoginInfoBoxDiv>
        <LoginInfoContentDiv>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam suscipit officiis ea eligendi quaerat, nulla explicabo asperiores laborum eaque aperiam, mollitia ab ad maiores? Consequatur alias voluptate facilis repellendus obcaecati.
            Ullam libero fuga voluptates voluptatem debitis praesentium laudantium sunt sit obcaecati minima voluptatum similique labore accusamus delectus, eum doloribus. Quaerat voluptate quod sint libero eveniet dolore dolorum quisquam aliquid animi!
            Nobis eveniet fugiat doloremque sit hic labore ea cumque provident corporis, id dolores fuga voluptatibus repudiandae debitis corrupti nulla ipsa itaque reiciendis porro molestias harum ipsum! Perspiciatis ipsum consequatur iure!
        </LoginInfoContentDiv>
        <hr style={{borderColor: 'white', borderWidth: 0, borderTopWidth: 3, opacity: '0.25', noshade: 'noshade'}}/>
        <LoginInfoContentDiv>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat commodi eum natus expedita ad, ratione ex reiciendis inventore delectus accusamus, aperiam ipsa repellat neque temporibus explicabo, ducimus et. Perspiciatis, ex.
            Distinctio exercitationem hic sed debitis. Ipsam, tempore, iusto voluptas, alias repellendus beatae excepturi illum natus error eum soluta adipisci repudiandae consectetur sit autem iure nobis quaerat quos sunt facilis obcaecati.
            Dolorem porro fuga autem voluptatem tempore corporis sequi iusto iure repellendus omnis natus, illo nihil nostrum temporibus sint deleniti sed sunt? Beatae magni enim minima, ut voluptate quibusdam ipsa magnam!
            Hic suscipit, nihil dolores iure quibusdam nobis. Sit blanditiis esse eum, fugit ea rem nisi recusandae, aspernatur, eos nulla expedita. Obcaecati laboriosam porro earum necessitatibus dolores libero voluptates aspernatur dolorem.
            Nam, recusandae architecto. Debitis atque neque possimus, quasi suscipit rem fuga aut aspernatur magnam delectus modi, commodi nam totam explicabo magni doloremque, voluptatem ducimus eveniet? Vero libero adipisci accusamus nihil?
            Reprehenderit, enim doloribus architecto perferendis expedita eligendi, harum, non ducimus magnam obcaecati nihil repudiandae facilis saepe eos quasi delectus sequi aliquam? Harum reprehenderit quibusdam officia earum natus perspiciatis provident quam.
            Aspernatur distinctio qui, veniam quasi necessitatibus quos provident natus? Assumenda voluptates debitis et cupiditate adipisci enim eum cumque quo totam doloribus quaerat eaque facilis, est illo tempore, aperiam doloremque id.
            Assumenda illo reprehenderit odit suscipit iste distinctio ipsa veniam nulla, minus culpa dolorum eveniet dolore at laborum consequatur ullam consectetur cum aperiam alias. Quisquam accusantium rerum hic error dolor aut?
            Quis omnis vel delectus commodi! Dolorum perspiciatis repellat reprehenderit numquam perferendis? Necessitatibus adipisci illum ut repellendus deserunt voluptatem sint nemo nobis nihil molestiae sequi praesentium, iusto vero est ipsam corporis.
            Eum perspiciatis est magnam maxime, delectus doloremque fuga voluptates necessitatibus aliquam unde, sunt deserunt. Expedita, dolorum. Quo, necessitatibus. Sed velit corrupti enim ratione officiis vitae officia, labore optio voluptate itaque?
            Minus, deleniti tempora! Possimus iste aliquid praesentium? Cupiditate, officia. Id sint veniam non odit in ea dicta nobis vel a adipisci. Neque magni, alias ullam amet fugit minima obcaecati! Perferendis.
            Consectetur assumenda libero quia repellat veritatis officiis sit vel unde at provident id, ipsa quaerat alias? Explicabo consectetur atque voluptas velit ipsam veniam, asperiores nesciunt, eius cupiditate cumque maxime optio?
            Totam iure dolorem iusto exercitationem voluptatum recusandae, quaerat, soluta quibusdam dolorum minima voluptate nulla nesciunt, officiis voluptas inventore. Eius quasi, deleniti nostrum dignissimos dolore illum sapiente in aliquid quo magnam.
            Deleniti, beatae atque dolor accusantium quos provident obcaecati impedit quaerat dolores nesciunt nihil deserunt debitis eius corrupti et ipsum quibusdam cupiditate minima nobis expedita nam odit, consequuntur error. Laborum, ullam?
            Veritatis repellendus cum eius, rerum ab quibusdam eum, saepe alias quas quos hic excepturi? Similique qui quisquam doloremque ad odit quae omnis, mollitia neque nesciunt aspernatur consequuntur doloribus nihil corporis!
        </LoginInfoContentDiv>
    </LoginInfoBoxDiv>
)

class LoginPage extends Component {
    render() {
        return (
            <div>
                < TopBar />
                < LoginInfoBox />
                < AuthenticationBox />
            </div>
        )
    }
}

export default LoginPage
