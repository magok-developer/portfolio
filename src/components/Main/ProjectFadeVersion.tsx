import styled from 'styled-components';
import FadeSection from './FadeSection';
import { projectData } from '../../../public/data/projectData';
import { Title } from '../Text/Title';
import { useState } from 'react';
import Modal from '../Modal/Modal';

type ProjectFadeVersionProps = {
  id: string;
};

export type ProjectData = {
  id: number;
  src: string;
  title: string;
  period: string;
  position: string;
  stack: { url: string }[];
  intro: string;
  planning: string;
  myPage: { text: string }[];
  get: { text: string }[];
  git: string;
  url: string;
};

const ProjectFadeVersion = ({ id }: ProjectFadeVersionProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImageData, setSelectedImageData] = useState<ProjectData | null>(null);

  const handleImageClick = (image: ProjectData) => {
    setSelectedImageData(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImageData(null);
  };
  return (
    <div id={id}>
      <Title title="Projects" />
      <Container>
        {projectData.map((data, index) => (
          <FadeSection key={index} index={index}>
            <h3>{data.title}</h3>
            <img src={data.src} alt={data.title} onClick={() => handleImageClick(data)} />
          </FadeSection>
        ))}
      </Container>
      {selectedImageData && <Modal isOpen={isModalOpen} onClose={closeModal} data={selectedImageData} />}
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1700px;

  img {
    width: 300px;
    height: auto;
  }

  h3 {
    margin-bottom: 4px;
  }

  p {
    max-width: 600px;
  }
`;

export default ProjectFadeVersion;
