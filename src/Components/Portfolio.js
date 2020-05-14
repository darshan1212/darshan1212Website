import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function(projects) {
        return (
          <div key={projects.title} className="columns feature-item">
            <div className="item-wrap">
              <h5>{projects.title}</h5>
              <p className="text-justify">{projects.description}</p>
              <span style={{ fontWeight: "bold" }}>Technology used: </span>
              <p>{projects.technologyused}</p>
              <span style={{ fontWeight: "bold" }}>Backend Tools: </span>
              <p>{projects.backendtools}</p>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <table className="container tablegayabho">
          <tbody>
            <tr>
              <th>
                <h1>Work</h1>
              </th>
              <th>
                <h1>Description</h1>
              </th>
              <th>
                <h1>Link</h1>
              </th>
            </tr>
            <tr>
              <td>PolSAR</td>
              <td>
                A polarimetric SAR application in Oceanography, finding novel
                approaches to use SAR data and apply the same in the field of
                oceanography. The sole objective of this project is to find
                novel approaches to use SAR (Synthetic Aperture Radar) data and
                apply the same in field of oceanography. The simplest
                application of oceanography is detection of ship by using its
                characteristics like length and breadth. Other aspects like
                trying H-Alpha decomposition on compact polarimetric data
                obtained from ISRO’s RISAT-1 satellite data. In this project
                work, sources of data from satellites other than RISAT-1, viz.
                ALOS PALSAR and SENTINEL-1 are used. The primary focus of this
                work is to detect oil spill in ocean which effects marine life
                most in ocean. Many scenes from different satellites having oil
                spills and look-alikes are collected and processed using tools
                like PolSARpro and certain libraries of python. Processing steps
                involves filtering, decomposition and classification, etc.
              </td>

              <td>
                &nbsp;&nbsp;
                <a href="Final_Report.pdf" className="button">
                  Project Report
                </a>
              </td>
            </tr>
            <tr>
              <td>SentMent</td>
              <td>
                This project about sentiment analysis of speech includes various
                tools and techniques used in sentiment analysis both for
                research and industry purposes. Our main goal was to expand our
                knowledge in sentiment analysis techniques which includes a
                major part of Natural Language Processing. We have referenced
                many research papers in the learning process and have tried to
                implement techniques within them. We have also tried
                implementing techniques such as Latent Semantic Analysis, Matrix
                Entropy Modeling, etc. which are very useful in supervised,
                semi-supervised and unsupervised learning. At the completion of
                this project, our aim is to perform real time analysis of
                conversation among people and tell sentiments of people
              </td>

              <td>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a
                  href="https://github.com/darshan1212/SentMent"
                  className="button"
                >
                  Get Code
                </a>
              </td>
            </tr>
            <tr>
              <td>MathModel</td>
              <td>
                To provide valuable information on the task­scheduling process
                of a load balancing algorithm, maintaining optimal load
                balancing in cloud or hosted environments , these valuable
                information contain CPU response time , memory available ,
                server performance etc,. In this project , optimization of load
                balancing algorithm with input as priority wise rank to
                individual servers. There are many algorithms of load balancing
                , for example Predictive Dynamic load balancing algorithm with
                service differentiation with service types is taken into
                consideration , Round robin algorithm with session switching ,
                weighted active monitoring load balancing in distributed systems
                etc,. In this project , rank allocated to servers according to
                performance of server in past , its memory capacity , its
                response time and other parameters that effect processing of
                task allocated to different servers , along with efficient and
                optimized algorithm of load balancing .
              </td>

              <td>
                &nbsp;&nbsp;
                <a href="MathModel.pdf" className="button">
                  Project Report
                </a>
              </td>
            </tr>
            <tr>
              <td>Research Paper</td>
              <td>
                Research oriented foss solution for automatic oil spill
                detection using risat-1 sar data. Publisher: IEEE. Oil spill is
                a growing threat to marine eco-system, and it continues to grow
                with the growing marine traffic. Intentional or accidental oil
                discharges in the ocean are not limited to endangering marine
                eco-system but also coastal zones where the accumulated oil
                spill reaches as remains in form of tar. Automation of oil spill
                detection is challenging from SAR data. It is also surveyed that
                free and open source software (FOSS) solution for oceanographic
                applications is rare but essential for the scientists who are
                working in this area. Proposed FOSS framework also provides
                flexibility to apply standard data processing algorithms for the
                SAR data processing. In this paper, proposed FOSS framework to
                process C band RISAT-1 SAR data is described. This paper also
                provides the comparative study on shortcomings of the widely
                accepted tools for oil spill detection. The experimental results
                of super-pixel based segmentation technique for dark spot
                detection are described using proposed FOSS framework.
              </td>
              <td>
                &nbsp;&nbsp;&nbsp;
                <a
                  href="https://ieeexplore.ieee.org/document/8127659"
                  className="button"
                >
                  Publication Link
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
}

export default Portfolio;
