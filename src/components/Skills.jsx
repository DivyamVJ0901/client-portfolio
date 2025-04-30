import React from 'react'
import SkillCard from './SkillCard'
import java from "../assets/Java.webp"
import springMVC from "../assets/spring-mvc.png"
import springBoot from "../assets/spring-boot.svg"
import JPA from "../assets/JPA.png"
import Hibernate from "../assets/Hibernate.png"
import restApi from "../assets/REST_API.png"
import apiDes from "../assets/API_DES.jpg"
import mySQL from "../assets/mySQL.webp"
import mongoDB from "../assets/mongoDB.png"
import redis from "../assets/redis.png"
import kafka from "../assets/kafka.png"
import debezium from "../assets/debezium.png"
import aws from "../assets/AWS.webp"
import git from "../assets/git.webp"
import jira from "../assets/Jira_.png"
import design from "../assets/design-pattern.jpeg"
import oops from "../assets/OOPS.png"
import keycloack from "../assets/keycloak.png"
import jwt from "../assets/JWT.webp"
import dsa from "../assets/dsa_.png"
import micro_serv from "../assets/microservices.png"
import docker from "../assets/docker.webp"

const skills = [ 
  { title: 'Java', icon: java },
  { title: 'Spring Boot', icon: springBoot },
  { title: 'Spring MVC', icon: springMVC },
  { title: 'JPA', icon: JPA },
  { title: 'Hibernate', icon: Hibernate},
  { title: 'AWS', icon: aws  },
  { title: 'Kafka', icon: kafka },
  { title: 'MySQL', icon: mySQL},
  { title: 'Mongo DB', icon: mongoDB},
  { title: 'Redis', icon: redis },
  { title: 'REST APIs', icon: restApi },
  { title: 'Microservices', icon: micro_serv },
  { title: 'Design pattern', icon: design},
  { title: 'OOPS', icon: oops },
  { title: 'Data Structures and Algorithms', icon: dsa },
  { title: 'Git', icon: git},
  { title: 'Docker', icon: docker },
  { title: 'Keycloak', icon: keycloack },
  { title: 'JSON Web Tokens', icon: jwt },
  { title: 'Debezium', icon: debezium },

]

const Skills = ({ darkMode }) => {
  return (
    <section className='pt-4 pb-12 bg-[#F0F2F5] dark:bg-[#131313]' id='skills'>
      <div className='container mx-auto px-4 '>
        <h2
          className='text-center mb-12 mt-8'
          style={{
            fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
            fontWeight: 700,
            fontStyle: 'normal',
            fontSize: '30px',
            lineHeight: '36px',
            color:  darkMode ? 'rgb(156, 163, 175)' : 'rgb(107, 114, 128)',
            letterSpacing: '3px' 
          }}
        >
          SKILLS
        </h2>
        <div className='max-w-6xl w-full mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'>
          {skills.map((skill, index) => (
            <SkillCard key={index} icon={skill.icon} title={skill.title} darkMode={darkMode}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
