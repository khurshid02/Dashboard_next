import styled from "styled-components";

const CardDashboardWrapper = styled.div`
  background-color: white;
  display: flex;
  .sidebar {
    flex-shrink: 0;
    width: 0;
    overflow: hidden;

    transition: 0.3s;
    height: 100vh;
    position: sticky;
    top: 0;
    padding-top: 20px;
    padding-bottom: 20px;
    &.show {
      width: 300px;
      padding: 20px;
    }
    .mnyu {
      height: 30px !important;
    }
    nav {
      li {
        a {
          .MuiButtonBase-root {
            display: block !important;
            padding: 10px 20px !important;
            border-radius: 6px !important;

            margin-bottom: 10px !important;
            transition: 0.3s !important;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3) !important;
            min-width: 200px !important;
            overflow: hidden !important;
            &:hover {
              background-color: rgba(255, 255, 255, 0.5) !important;
            }
          }

          &.active {
            .MuiButtonBase-root {
              background-color: blue !important;
              color: white !important;
            }
          }
        }
      }
    }
  }
  .text {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .rightside {
    background-image: radial-gradient(
      circle,
      #645de1,
      #0091ff,
      #00b5f0,
      #00d0c6,
      #79e3a2
    );
    flex: 1;
    /* flex: 1 1 0%; */
    /* overflow-x: hidden; */
    position: relative;
    align-items: center;
    header {
      padding: 20px;
      position: sticky;
      top: 0;
      background-color: white;
      z-index: 1000;
      .logo {
        height: 20px;
        margin-right: 20px;
      }
    }
    .content {
      padding: 20px;
    }
  }

  .shadow {
    justify-content: space-between;
  }

  .just {
    align-items: center;
  }

  .group {
    background: #ffc145;
    margin-right: 20px;
    border-radius: 50%;
    width: 35.06px;
    height: 35.06px;
    left: 1343.62px;
    top: 207.72px;
  }

  .admin {
    font-size: 14px;
  }

  .groups {
    margin-left: 10px;
  }

  .mr-2 {
    margin-right: 5px;
    height: 40px;
    width: 40px;
  }
`;

export default CardDashboardWrapper;
