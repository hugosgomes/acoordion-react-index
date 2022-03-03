import React, { useEffect, useState } from 'react';
import { Icon, Row, Col } from 'antd';
import { Texts } from '../Helpers/Texts';

const CommonQuestionsCurriculum = () => {
  const [questions, setQuestions] = useState([
    {
      title: `Como divulgar o meu curriculo?`,
      answer: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'`,
      status: false,
    },
    {
      title: `Como entrar em contato com o profissional?`,
      status: false,
      answer: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here`,
    },
    {
      title: `Como cadastrar o curriculo?`,
      status: false,
      answer: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or looking at its layout. The point of using Lorem Ipsum is that it has a more-or`,
    },
    {
      title: `O que fazer depois que entra em contato?`,
      status: false,
      answer: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or looking at its layout. The point of using Lorem Ipsum is that it has a more-or looking at its layout. The point of using Lorem Ipsum is that it has a more-or`,
    },
    {
      title: `Qual o procedimento depois que funciona?`,
      status: false,
      answer: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or looking at its layout. The point of using Lorem Ipsum is that it has a more-or looking at its layout. The point of using Lorem Ipsum is that it has a more-orlooking at its layout. The point of using Lorem Ipsum is that it has a more-or`,
    },
    {
      title: `Eu gosto de manga, estou sem ideia?`,
      status: false,
      answer: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or looking at its layout. The point of using Lorem Ipsum is that it has a more-or looking at its layout. The point of using Lorem Ipsum is that it has a more-or`,
    },
  ]);

  const handleClickQuestion = (label, index) => {
    let aux = questions;
    if (aux[index].status === false) {
      setQuestions([...questions, (questions[index].status = true)]);
    } else if (aux[index].status === true) {
      setQuestions([...questions, (questions[index].status = false)]);
    }
    console.log(questions[index].status);
    console.log(index);
  };
  console.log(questions);

  useEffect(() => {}, []);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          minHeight: 400,
          marginTop: 32,
          marginLeft: 40,
          marginRight: 6,
        }}
      >
        <div
          xs={23}
          lg={22}
          xl={18}
          xxl={15}
          style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}
        >
          <div>
            <div>
              <h1
                style={{ position: 'relative', fontSize: 24 }}
                className={'title title-line'}
              >
                {' '}
                Perguntas frequentes / Dúvidas currículo{' '}
              </h1>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              margin: '32px auto',
              flexDirection: 'column',
              width: '80%',
            }}
          >
            {questions.map((question, index) => {
              return (
                <div
                  className="querys"
                  onClick={() => handleClickQuestion(`card0${index}`, index)}
                >
                  {question.status === false ? (
                    <div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          fontSize: 24,
                          fontWeight: '400px',
                          marginBottom: 16,
                        }}
                      >
                        <div>{question.title}</div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          fontSize: 24,
                          fontWeight: '400px',
                          marginBottom: 16,
                        }}
                      >
                        {question.title}
                      </div>

                      <span>{question.answer}</span>
                      <div
                        style={{
                          borderBottom: '4px solid #1680CE99',
                          marginTop: '14px',
                        }}
                      />
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonQuestionsCurriculum;
