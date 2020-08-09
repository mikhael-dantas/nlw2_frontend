import React from 'react';

// import { Container } from './styles';

import './styles.css'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import api from '../../services/api';

export interface Teacher {
    cost: string
    created_at: string
    id: number
    subject: string
    updated_at: string
    user: {
        avatar: string
        bio: string
        created_at: string
        id: number
        name: string
        updated_at: string
        whatsapp: string
    }
}
interface TeacherItemProps {
    teacher: Teacher
}


const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) => {
    function createNewConnection () {
        api.post('connections', {
            user_id: teacher.user.id
        })
    }
    return(
        <article className="teacher-item">
                    <header>
                        <img src={teacher.user.avatar} alt={teacher.user.name}/>
                        <div>
                            <strong>{teacher.user.name}</strong>
                            <span>{teacher.user.name}</span>
                        </div>
                    </header>
                    <p>{teacher.user.bio}</p>
                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R$ {teacher.cost}</strong>
                        </p>
                        <a onClick={createNewConnection} href='https://wa.me/+5511959945482' target='blank'>
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </a>
                    </footer>
                </article>
    )
    
}

export default TeacherItem;