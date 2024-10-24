import styled from "styled-components";

export const HomeBackground = styled.div`
  @media screen and (min-width: 320px) {
    background-image: url("/camper@1x.webp");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    justify-content: center;
    gap: 32px;
    height: calc(100vh - 72px);

    @media (min-resolution: 192dpi) {
      background-image: url("/camper@2x.webp");
    }
  }
  @media screen and (min-width: 768px) {
    padding: 0 64px;
    gap: 40px;
  }
`;

export const ContainerFoText = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

export const MainTitle = styled.h1`
  @media screen and (min-width: 320px) {
    color: var(--primary-inputs-color);
    font-family: var(--font-family);
    font-weight: var(--bolt-font);
    font-size: 32px;
    line-height: 100%;
  }

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 67%;
  }
`;

export const Description = styled.p`
  @media screen and (min-width: 320px) {
    font-family: var(--font-family);
    font-weight: var(--bolt-font);
    font-size: 20px;
    line-height: 130%;
    color: var(--primary-inputs-color);
  }

  @media screen and (min-width: 768px) {
    font-family: var(--font-family);
    font-weight: var(--bolt-font);
    font-size: 24px;
    line-height: 133%;
    color: var(--primary-inputs-color);
  }
`;
