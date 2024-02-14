import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import UserSection from "./components/UserSection";

const darkTheme = {
  background: "#222",
  color: "#fff",
};

const Wrapper = styled.div`
  font-family: "Arial", sans-serif;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`;

const Wrappers = styled.div`
  font-family: "Arial", sans-serif;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserInfo = styled.div`
  margin-top: 20px;
  text-align: center;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
  width: 80%;
  max-width: 400px;
  background-color: ${({ theme }) => theme.background};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const App = () => {
  const [theme] = useState(darkTheme);
  const [gitHubUserData, setGitHubUserData] = useState({
    username: "",
    data: null,
  });
  const [gitLabUserData, setGitLabUserData] = useState({
    username: "",
    data: null,
  });

  const fetchGitHubUserData = async () => {
    const { username } = gitHubUserData;
    if (!username) return;

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setGitHubUserData((prevUserData) => ({
        ...prevUserData,
        data: data,
      }));
    } catch (error) {
      console.error("Error fetching GitHub user data:", error);
    }
  };

  const Gap = styled.div`
    width: 20px; /* Adjust the height according to your preference */
  `;

  const fetchGitLabUserData = async () => {
    const { username } = gitLabUserData;
    if (!username) return;

    try {
      // Adjust the API endpoint according to the GitLab API documentation
      const response = await fetch(
        `https://gitlab.com/api/v4/users?username=${username}`
      );
      const data = await response.json();
      setGitLabUserData((prevUserData) => ({
        ...prevUserData,
        data: data,
      }));
    } catch (error) {
      console.error("Error fetching GitLab user data:", error);
    }
  };

  const handleGitHubUsernameChange = (e) => {
    const { value } = e.target;
    setGitHubUserData((prevUserData) => ({
      ...prevUserData,
      username: value,
    }));
  };

  const handleGitLabUsernameChange = (e) => {
    const { value } = e.target;
    setGitLabUserData((prevUserData) => ({
      ...prevUserData,
      username: value,
    }));
  };

  const handleGitHubClear = () => {
    setGitHubUserData({ username: "", data: null });
  };

  const handleGitLabClear = () => {
    setGitLabUserData({ username: "", data: null });
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Wrappers>
          <UserInfo>
            {/* Display static user info at the top */}

            <h2> John Doe</h2>
            <p>
              John Doe is an accomplished engineer with a passion for innovation
              and problem-solving. With a background in mechanical engineering
              from Yale University, John has spent the past decade contributing
              to groundbreaking projects in various industries.
            </p>
            <p>Hobbies: Reading, Painting, Coding</p>
          </UserInfo>
          <Gap />
          <UserInfo>
            {/* Display static user info at the top */}
            <h2>ARTICLES</h2>

            <h3>Best Articles on Computer Science:</h3>
            <ol>
              <li>The Mythical Man-Month by Fred Brooks</li>
              <li>
                Structure and Interpretation of Computer Programs by Harold
                Abelson and Gerald Jay Sussman
              </li>

              <li>Code Complete by Steve McConnell</li>
            </ol>
          </UserInfo>
        </Wrappers>
        <Wrapper>
          <UserSection
            userData={gitHubUserData}
            fetchUserData={fetchGitHubUserData}
            handleUsernameChange={handleGitHubUsernameChange}
            handleClear={handleGitHubClear}
            platform='github' // Specify platform as GitHub
          />
          <Gap />
          <UserSection
            userData={gitLabUserData}
            fetchUserData={fetchGitLabUserData}
            handleUsernameChange={handleGitLabUsernameChange}
            handleClear={handleGitLabClear}
            platform='gitlab' // Specify platform as GitLab
          />
        </Wrapper>
      </ThemeProvider>
    </>
  );
};

export default App;
