import React from "react";
import styled from "styled-components";
import Button from "./Button";
import StyledInput from "./StyledInput";

const HeroSection = styled.div`
  background-color: #333;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
`;

const UserInfoContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Container = styled.div`
  max-width: 400px;
`;

const UserInfo = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

const UserImage = styled.img`
  border-radius: 50%;
  margin-right: 20px;
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const UserSection = ({
  userData,
  fetchUserData,
  handleUsernameChange,
  handleClear,
  platform, // New prop for distinguishing GitHub or GitLab
}) => {
  return (
    <HeroSection>
      <h1>{platform === "gitlab" ? "GitLab" : "GitHub"} User Info</h1>
      <UserInfoContainer>
        <Container>
          <StyledInput
            type='text'
            placeholder={`Enter ${
              platform === "gitlab" ? "GitLab" : "GitHub"
            } username`}
            value={userData.username}
            onChange={handleUsernameChange}
          />
          <Button onClick={fetchUserData}>FETCH</Button>
          <Button onClick={handleClear}>CLEAR</Button>
        </Container>
      </UserInfoContainer>
      {userData.data && (
        <Container>
          <UserInfo>
            <UserImage src={userData.data.avatar_url} alt='User Avatar' />
            <div>
              <h2>{userData.data.name}</h2>
              <p>{userData.data.bio}</p>
              <p>Followers: {userData.data.followers}</p>
              <p>Following: {userData.data.following}</p>
              <p>Email: {userData.data.email || "Not available"}</p>
              <p>Public Repositories: {userData.data.public_repos}</p>
              <p>Location: {userData.data.location || "Not available"}</p>
            </div>
          </UserInfo>
        </Container>
      )}
    </HeroSection>
  );
};

export default UserSection;
