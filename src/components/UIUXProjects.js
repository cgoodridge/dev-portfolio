import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#141414',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#ffffff',
      dark: '#006596',
      contrastText: '#000',
    },
  },
});

class UIUXProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
  
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.dev_projects;
      
      const technologies = this.props.resumeProjects.technologies;
      var title = this.props.resumeProjects.title;
      var description = this.props.resumeProjects.description;
      var url = this.props.resumeProjects.url;
      var url_demo = this.props.resumeProjects.url_demo;
      if (this.props.resumeProjects.technologies) {
        var tech = technologies.map((icons, i) => {
          return (
            <li className="list-inline-item mx-3" key={i}>
              <span>
                <div className="text-center">
                  <i className={icons.class} style={{ fontSize: "300%" }}>
                    <p className="text-center" style={{ fontSize: "30%" }}>
                      {icons.name}
                    </p>
                  </i>
                </div>
              </span>
            </li>
          );
        });
  
        }
      var projects = this.props.resumeProjects.map(function (projects) {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={projects.title}
            style={{ cursor: "cursor" }}
          >
            <span className="portfolio-item d-block">
              <div className="foto">
                <div>
                  <img
                    src={projects.images[0]}
                    alt="projectImages"
                    height="230"
                    style={{marginBottom: 0, paddingBottom: 0, position: 'relative'}}
                  />
                  <span className="project-date">{projects.startDate}</span>
                  <br />
                  <p className="project-title-settings mt-3">
                    {projects.title}
                  </p>

                  <p className="card-description">{projects.description}</p>
                  <div className="col-md-12 text-center">
                    <ul className="list-inline mx-auto">
                      {
                        projects.technologies.map((icons, i) => {
                          return (
                            <li className="list-inline-item mx-3" key={i}>
                              <span>
                                <div className="text-center">
                                  <i className={icons.class} style={{ fontSize: "300%", color: 'whitesmoke' }}>
                                    <p className="text-center" style={{ fontSize: "30%" }}>
                                      {icons.name}
                                    </p>
                                  </i>
                                </div>
                              </span>
                            </li>
                          );
                        })
                      }
                    </ul>
                    <ThemeProvider theme={theme} >
                      {projects.url ? (
                        <Button variant="outlined" size="large" color="secondary" href={projects.url} target="_blank" style={{margin: '16px'}}>
                          View
                        </Button>
                      ) : null}
                      {projects.url_demo ? (
                        <Button variant="outlined" size="large" color="secondary" href={projects.url_demo} target="_blank" style={{margin: '16px'}}>
                          Interactive Mockup
                        </Button>
                      ) : null}
                    </ThemeProvider>
                  
                  </div>
                </div>
              </div>
            </span>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{projects}</div>
          </div>

        </div>
      </section>
    );
  }
}

export default UIUXProjects;
