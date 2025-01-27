import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

type IntroTextProps = {
  id: string;
};

export const IntroText = ({ id }: IntroTextProps) => {
  const contentRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, options);

    contentRefs.current.forEach((content) => {
      if (content) {
        observer.observe(content);
      }
    });

    return () => {
      contentRefs.current.forEach((content) => {
        if (content) {
          observer.unobserve(content);
        }
      });
    };
  }, []);

  return (
    <Container id={id}>
      <article
        className="content"
        ref={(el) => {
          if (el && !contentRefs.current.includes(el)) {
            contentRefs.current.push(el);
          }
        }}
      >
        <h2 className="content title">반갑습니다!</h2>
        <p className="content text">프론트엔드 개발자 하지원 입니다.</p>
      </article>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .title {
    margin: 0 0 1rem;
    font-size: 2rem;
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.5s ease;
  }

  .text {
    font-size: 1.2rem;
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.5s 0.25s ease;
  }

  .content.show .title {
    opacity: 1;
    transform: translateY(0);
  }

  .content.show .text {
    opacity: 1;
    transform: translateY(0);
  }
`;
