import Principal "mo:core/Principal";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";
import Text "mo:core/Text";
import Nat "mo:core/Nat";

actor {
  // Types
  type QuizQuestion = {
    question : Text;
    options : [Text];
    correctIndex : Nat;
    explanation : Text;
  };

  type QuizScore = {
    user : Text;
    score : Nat;
    total : Nat;
  };

  type ContactMessage = {
    name : Text;
    email : Text;
    message : Text;
  };

  type NewsItem = {
    title : Text;
    summary : Text;
    date : Text;
    category : Text;
  };

  // Modules for comparison
  module NewsItem {
    public func compare(news1 : NewsItem, news2 : NewsItem) : Order.Order {
      Text.compare(news1.title, news2.title);
    };
  };

  module QuizScore {
    public func compare(score1 : QuizScore, score2 : QuizScore) : Order.Order {
      Text.compare(score1.user, score2.user);
    };
  };

  // Storage
  let questions = Map.empty<Nat, QuizQuestion>();
  let newsItems = Map.empty<Nat, NewsItem>();
  let scores = Map.empty<Principal, QuizScore>();
  let messages = Map.empty<Nat, ContactMessage>();
  var nextQuestionId = 0;
  var nextNewsId = 0;
  var nextMessageId = 0;

  // Quiz system
  public shared ({ caller }) func addQuestion(question : QuizQuestion) : async Nat {
    let id = nextQuestionId;
    questions.add(id, question);
    nextQuestionId += 1;
    id;
  };

  public query ({ caller }) func getQuestions() : async [QuizQuestion] {
    questions.values().toArray();
  };

  public shared ({ caller }) func submitScore(user : Text, score : Nat, total : Nat) : async () {
    scores.add(caller, { user; score; total });
  };

  public query ({ caller }) func getScores() : async [QuizScore] {
    scores.values().toArray().sort();
  };

  // Contact form
  public shared ({ caller }) func submitMessage(message : ContactMessage) : async Nat {
    let id = nextMessageId;
    messages.add(id, message);
    nextMessageId += 1;
    id;
  };

  public query ({ caller }) func getMessages() : async [ContactMessage] {
    messages.values().toArray();
  };

  // News/threats
  public shared ({ caller }) func addNewsItem(newsItem : NewsItem) : async Nat {
    let id = nextNewsId;
    newsItems.add(id, newsItem);
    nextNewsId += 1;
    id;
  };

  public shared ({ caller }) func updateNewsItem(id : Nat, newsItem : NewsItem) : async () {
    if (not newsItems.containsKey(id)) {
      Runtime.trap("News item not found");
    };
    newsItems.add(id, newsItem);
  };

  public shared ({ caller }) func deleteNewsItem(id : Nat) : async () {
    if (not newsItems.containsKey(id)) {
      Runtime.trap("News item not found");
    };
    newsItems.remove(id);
  };

  public query ({ caller }) func getNewsItems() : async [NewsItem] {
    newsItems.values().toArray().sort();
  };

  public query ({ caller }) func getNewsItem(id : Nat) : async NewsItem {
    switch (newsItems.get(id)) {
      case (null) { Runtime.trap("News item not found") };
      case (?item) { item };
    };
  };

  // Data seeding
  public shared ({ caller }) func seedData() : async () {
    let question1 : QuizQuestion = {
      question = "What is phishing?";
      options = ["Fishing in a river", "Cyber attack", "Malware", "Firewall"];
      correctIndex = 1;
      explanation = "Phishing is a cyber attack to steal information.";
    };

    let news1 : NewsItem = {
      title = "New ransomware attack";
      summary = "A new ransomware attack targets hospitals";
      date = "2024-02-15";
      category = "Ransomware";
    };

    ignore addQuestion(question1);
    ignore addNewsItem(news1);
  };
};
