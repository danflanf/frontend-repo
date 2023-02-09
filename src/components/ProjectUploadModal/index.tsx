import React, { useState } from 'react';
import styled from 'styled-components';

import type { RootState } from '@/RTK/stores/store';
import { useSelector } from 'react-redux';

import { IProject } from './index.types';

import { ProjectUploadForm } from './ProjectUploadForm';
import { FormSubmitButton } from './FormSubmitButton';
import { ModalCloseButton } from './ModalCloseButton';

export function ProjectUploadModal() {
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);

  const [projectUploadForm, setProjectUploadForm] = useState<IProject>({
    projectTitle: '',
    projectDescription: '',
    projectLink: '',
    demoSiteLink: '',
    hashtagArr: [],
  });

  return (
    <ProjectUploadModalOverlay isOpen={isOpen}>
      <ProjectUploadModalWrapper>
        <ProjectUploadForm
          projectUploadForm={projectUploadForm}
          setProjectUploadForm={setProjectUploadForm}
        />
        <FormSubmitButton projectUploadForm={projectUploadForm} />
        <ModalCloseButton />
      </ProjectUploadModalWrapper>
    </ProjectUploadModalOverlay>
  );
}

const ProjectUploadModalOverlay = styled.div<{ isOpen: boolean }>`
  border: 2px solid limegreen;

  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;

  padding: 32px;

  position: absolute;
  top: 0;

  width: 100vw;
  height: 100vh;

  backdrop-filter: blur(10px);

  z-index: 1000;
`;

const ProjectUploadModalWrapper = styled.div`
  border: 2px solid limegreen;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  width: 500px;

  padding: 32px;

  background-color: black;
`;
