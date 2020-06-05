import React, { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

class FaqContent extends Component {
  render() {
    return (
      <section className="faq-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="faq-accordion">
                <Accordion>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What is COVID Modeling Data Collaborative?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        The COVID Modeling Data Collaborative is a collection of
                        people, code, and data meant to help researchers, policy
                        makers, and any interested parties access data that can
                        be used to analyze and influence public policy related
                        to the current pandemic.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How much does it cost to access the data?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>It's free!</p>
                      <p>
                        This project is meant as a public good and, for as long
                        as the project continues, it will be free and
                        open-source.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        If data access is free, how do you intend to monetize
                        this work?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        We don't. We, and our partners and sponsors, want to
                        enable policy discussions that are rooted in accurate,
                        comprehensive, easy-to-access data. We are lucky enough
                        to have an opportunity to facilitate this.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Where does the data come from?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        All over. We collect the data from a variety of sources.
                        You can learn more about where each dataset comes from
                        by reading the <a href="/rest-api">API documentation</a>
                        . We use official government sources where possible.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What if you don't have the data I'm looking for?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Tell us! We're trying to rapidly expand the datasets
                        that we have available in our API and would love to hear
                        about the data that you need! You can find us on{" "}
                        <a href="https://twitter.com/valorumdata">Twitter</a>,{" "}
                        <a href="mailto:covid.data@valorumdata.com">Email</a>,
                        or our <a href="/contact">Contact page</a>.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How can I access the data?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>The data is accessible through several options:</p>

                      <ol>
                        <li>
                          You can interact with the data using our{" "}
                          <a href="/python">Python client</a>/
                          <a href="/R">R client</a>. This route will hide much
                          of the behind-the-scenes work and get you working with
                          the data quickly.
                        </li>
                        <li>
                          You can directly query our{" "}
                          <a href="/rest-api">REST API</a> which will give you
                          more control on how to bring the data into your
                          environment.
                        </li>
                        <li>
                          You can interface with the data using{" "}
                          <a href="/graphql-api">GraphQL</a>
                          which is another option that gives you a high degree
                          of control.
                        </li>
                      </ol>

                      <p>
                        We think the Python and R libraries will be enough for
                        most people, but we wanted to make sure to expose the
                        other options as well.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How can I contribute?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        There are a number of things you can do to help this
                        project succeed:
                      </p>
                      <ul>
                        <li>
                          Use the data and spread the word! We want to help as
                          many groups as possible benefit from these efforts.
                          Usage and word of mouth are powerful tools that can
                          help us reach that goal.
                        </li>
                        <li>
                          Contribute a dataset: if you, your instutition, or
                          another institution you are aware of has relevant
                          data, we'd be happy to help distribute the data to a
                          wide audience. Please reach out to us at{" "}
                          <a href="mailto:covid.data@valorumadta.com">
                            covid.data@valorumdata.com
                          </a>
                        </li>
                      </ul>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FaqContent;
