
import { useState, useRef, useEffect } from "react";
import { Send, Mic, MicOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { companionResponses } from "@/data/companionResponses";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const CompanionChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hello! I'm your companion. How can I help you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate companion response
    setTimeout(() => {
      const responseIndex = Math.floor(Math.random() * companionResponses.length);
      const companionMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: companionResponses[responseIndex],
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, companionMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    
    // Simulate voice input if recording
    if (!isRecording) {
      setTimeout(() => {
        setInputValue("I'm feeling a bit tired today.");
        setIsRecording(false);
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto py-4 px-1">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex",
                message.isUser ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "max-w-[80%]",
                  message.isUser ? "chat-bubble-user" : "chat-bubble-companion"
                )}
              >
                {message.content}
                <div className={cn(
                  "text-xs mt-1",
                  message.isUser ? "text-muted-foreground" : "text-white/70"
                )}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="chat-bubble-companion flex space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef}></div>
        </div>
      </div>
      
      <div className="bg-white/80 backdrop-blur-lg border-t border-border p-4 rounded-t-xl">
        <div className="relative flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "rounded-full",
              isRecording && "text-companion-emergency bg-companion-emergency/10"
            )}
            onClick={toggleRecording}
          >
            {isRecording ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
          </Button>
          
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            className="flex-1 border-0 bg-transparent py-3 px-4 focus:ring-0 focus-visible:ring-0 focus-visible:outline-none"
          />
          
          <Button
            onClick={handleSendMessage}
            disabled={inputValue.trim() === ""}
            className="rounded-full bg-companion hover:bg-companion/90 text-white"
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CompanionChat;
