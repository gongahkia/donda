import React, { useState } from "react";

const App: React.FC = () => {
  const [query, setQuery] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [workflows] = useState([
    { id: 1, name: "Extract Product Data", status: "active", steps: 3 },
    { id: 2, name: "Fill Registration Form", status: "completed", steps: 5 },
    { id: 3, name: "Compare Prices", status: "draft", steps: 4 }
  ]);

  const recentQueries = [
    { id: 1, text: "Help me extract all product prices from this e-commerce site", timestamp: "2 minutes ago" },
    { id: 2, text: "Guide me through filling out this job application", timestamp: "15 minutes ago" },
    { id: 3, text: "Find all contact information on this company website", timestamp: "1 hour ago" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      console.log("Submitting query:", query);
      setQuery("");
    }
  };

  const toggleVoiceInput = () => {
    setIsListening(!isListening);
  };

  return (
    <div style={{
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      backgroundColor: "#f8fafc",
      minHeight: "100vh",
      color: "#1e293b"
    }}>
      {/* Header */}
      <header style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        padding: "2rem 1rem",
        textAlign: "center"
      }}>
        <h1 style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          margin: "0 0 0.5rem 0"
        }}>
          🌐 Donda
        </h1>
        <p style={{
          fontSize: "1.2rem",
          opacity: 0.9,
          margin: 0
        }}>
          Intelligent Web Navigation Assistant
        </p>
      </header>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 1rem" }}>
        {/* Main Query Section */}
        <div style={{
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "2rem",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          marginBottom: "2rem"
        }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#1e293b" }}>
            What would you like to do today?
          </h2>

          <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
            <div style={{ position: "relative" }}>
              <input
                type="text"
                placeholder="e.g., Extract all product data from this shopping site..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{
                  width: "100%",
                  padding: "1rem 1rem 1rem 3rem",
                  fontSize: "1.1rem",
                  border: "2px solid #e2e8f0",
                  borderRadius: "8px",
                  outline: "none",
                  transition: "border-color 0.2s"
                }}
                onFocus={(e) => e.target.style.borderColor = "#667eea"}
                onBlur={(e) => e.target.style.borderColor = "#e2e8f0"}
              />
              <span style={{
                position: "absolute",
                left: "1rem",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "1.2rem"
              }}>
                🔍
              </span>
            </div>

            <div style={{
              display: "flex",
              gap: "1rem",
              marginTop: "1rem",
              alignItems: "center"
            }}>
              <button
                type="submit"
                style={{
                  backgroundColor: "#667eea",
                  color: "white",
                  border: "none",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "6px",
                  fontSize: "1rem",
                  cursor: "pointer",
                  fontWeight: "500"
                }}
                disabled={!query.trim()}
              >
                Create Workflow
              </button>

              <button
                type="button"
                onClick={toggleVoiceInput}
                style={{
                  backgroundColor: isListening ? "#ef4444" : "#10b981",
                  color: "white",
                  border: "none",
                  padding: "0.75rem 1rem",
                  borderRadius: "6px",
                  fontSize: "1rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem"
                }}
              >
                {isListening ? "🔴" : "🎤"}
                {isListening ? "Stop Listening" : "Voice Input"}
              </button>
            </div>
          </form>

          {isListening && (
            <div style={{
              padding: "1rem",
              backgroundColor: "#fef2f2",
              border: "1px solid #fecaca",
              borderRadius: "6px",
              marginTop: "1rem"
            }}>
              <span style={{ color: "#dc2626" }}>🎙️ Listening... Speak your request</span>
            </div>
          )}
        </div>

        {/* Dashboard Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "2rem"
        }}>
          {/* Active Workflows */}
          <div style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "1.5rem",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
          }}>
            <h3 style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              marginBottom: "1rem",
              color: "#1e293b"
            }}>
              📋 Active Workflows
            </h3>

            {workflows.map(workflow => (
              <div key={workflow.id} style={{
                padding: "1rem",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                marginBottom: "0.75rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}>
                <div>
                  <div style={{ fontWeight: "500", marginBottom: "0.25rem" }}>
                    {workflow.name}
                  </div>
                  <div style={{ fontSize: "0.875rem", color: "#64748b" }}>
                    {workflow.steps} steps
                  </div>
                </div>
                <span style={{
                  padding: "0.25rem 0.75rem",
                  borderRadius: "12px",
                  fontSize: "0.75rem",
                  fontWeight: "500",
                  backgroundColor: workflow.status === "active" ? "#dcfce7" :
                                 workflow.status === "completed" ? "#dbeafe" : "#f1f5f9",
                  color: workflow.status === "active" ? "#166534" :
                         workflow.status === "completed" ? "#1e40af" : "#475569"
                }}>
                  {workflow.status}
                </span>
              </div>
            ))}

            <button style={{
              width: "100%",
              padding: "0.75rem",
              border: "2px dashed #cbd5e1",
              borderRadius: "8px",
              backgroundColor: "transparent",
              color: "#64748b",
              cursor: "pointer",
              fontSize: "0.875rem",
              marginTop: "0.5rem"
            }}>
              + Create New Workflow
            </button>
          </div>

          {/* Recent Queries */}
          <div style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "1.5rem",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
          }}>
            <h3 style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              marginBottom: "1rem",
              color: "#1e293b"
            }}>
              🕒 Recent Activity
            </h3>

            {recentQueries.map(item => (
              <div key={item.id} style={{
                padding: "1rem",
                borderLeft: "3px solid #667eea",
                backgroundColor: "#f8fafc",
                marginBottom: "0.75rem",
                borderRadius: "0 6px 6px 0"
              }}>
                <div style={{
                  fontWeight: "500",
                  marginBottom: "0.5rem",
                  color: "#1e293b"
                }}>
                  {item.text}
                </div>
                <div style={{
                  fontSize: "0.75rem",
                  color: "#64748b"
                }}>
                  {item.timestamp}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div style={{
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "2rem",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          marginTop: "2rem"
        }}>
          <h3 style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            marginBottom: "1.5rem",
            color: "#1e293b",
            textAlign: "center"
          }}>
            ✨ What Donda Can Help You With
          </h3>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem"
          }}>
            {[
              {
                icon: "📊",
                title: "Data Extraction",
                description: "Extract structured data from any website automatically"
              },
              {
                icon: "📝",
                title: "Form Filling",
                description: "Get guided assistance for complex web forms"
              },
              {
                icon: "🔍",
                title: "Information Gathering",
                description: "Collect specific information across multiple pages"
              },
              {
                icon: "⚡",
                title: "Task Automation",
                description: "Automate repetitive web-based workflows"
              }
            ].map((feature, index) => (
              <div key={index} style={{
                textAlign: "center",
                padding: "1.5rem",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                transition: "transform 0.2s, box-shadow 0.2s",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 25px -8px rgba(0, 0, 0, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>
                  {feature.icon}
                </div>
                <h4 style={{
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  marginBottom: "0.5rem",
                  color: "#1e293b"
                }}>
                  {feature.title}
                </h4>
                <p style={{
                  fontSize: "0.875rem",
                  color: "#64748b",
                  lineHeight: "1.5"
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
