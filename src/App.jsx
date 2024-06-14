import "./App.css";

function App() {
  return (
    <>
      <section id="events">
        <div className="cs-container">
          <div class="cs-image">
            <picture class="cs-picture">
              <img
                src=""
                alt="busines meeting"
                width="522"
                height="609"
                aria-hidden="true"
              />
            </picture>
          </div>
          <div className="cs-events">
            <div class="cs-content">
              <span className="cs-topper">Our Events</span>
              <h2 className="cs-title">Upcoming Events</h2>
            </div>
            <ul class="cs-card-group">
              <li class="cs-item">
                <span class="cs-date">
                  <strong>26</strong>
                  Oct
                </span>
                <div class="cs-info-wrapper">
                  <div class="cs-info">
                    <h3 class="cs-h3">Business Transformation Summit</h3>
                    <span class="cs-location">
                      1250 23rd Street NW, DC 20037
                    </span>
                    <span class="cs-time">
                      <img
                        class="cs-icon"
                        src=""
                        width="24"
                        height="24"
                        aria-hidden="true"
                      />
                      12:00AM - 02:00PM
                    </span>
                  </div>
                  <div class="cs-button-wrapper">
                    <a href="" class="cs-button-solid">
                      Buy Ticket
                    </a>
                  </div>
                </div>
              </li>
              <li class="cs-item">
                <span class="cs-date">
                  <strong>22</strong>
                  Oct
                </span>
                <div class="cs-info-wrapper">
                  <div class="cs-info">
                    <h3 class="cs-h3">Consulting Excellence Conference</h3>
                    <span class="cs-location">
                    700 Broadway, New York, NY 1000
                    </span>
                    <span class="cs-time">
                      <img
                        class="cs-icon"
                        src=""
                        width="24"
                        height="24"
                        aria-hidden="true"
                      />
                      02:00AM - 4:00PM
                    </span>
                  </div>
                  <div class="cs-button-wrapper">
                    <a href="" class="cs-button-solid">
                      Buy Ticket
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
