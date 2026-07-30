import "./Copilot.css";
import { useState } from "react";
import {
  Bot,
  X,
  Send,
  Sparkles
} from "lucide-react";

function Copilot() {

  const [open, setOpen] = useState(false);

  const prompts = [
    "Validate my startup idea",
    "Create a pitch deck",
    "Find funding",
    "Business model",
  ];

  return (
    <>

      {/* Floating Button */}

      <button
        className="copilot-fab"
        onClick={() => setOpen(true)}
      >
        <Bot size={28} />
      </button>

      {/* Popup */}

      {open && (

        <div className="copilot-window">

          <div className="copilot-header">

            <div className="copilot-title">

              <Bot size={24} />

              <div>

                <h3>StartupHub Copilot</h3>

                <span>AI Startup Assistant</span>

              </div>

            </div>

            <button
              className="close-btn"
              onClick={() => setOpen(false)}
            >
              <X size={20} />
            </button>

          </div>

          <div className="copilot-body">

            <div className="ai-message">

              <Sparkles size={18} />

              <p>

                Hello 👋

                <br />

                I'm your AI startup assistant.

                Ask me about funding, mentors,
                pitch decks, business plans or
                anything related to your startup.

              </p>

            </div>

            <div className="prompt-list">

              {prompts.map((item, index) => (

                <button
                  key={index}
                  className="prompt-btn"
                >
                  {item}
                </button>

              ))}

            </div>

          </div>

          <div className="copilot-footer">

            <input
              type="text"
              placeholder="Ask StartupHub Copilot..."
            />

            <button>

              <Send size={18} />

            </button>

          </div>

        </div>

      )}

    </>
  );

}

export default Copilot;