import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/landing/Footer";
import {
  BookOpen,
  Play,
  Clock,
  Trophy,
  CheckCircle2,
  Star,
  Users,
  Globe,
  ChevronRight,
  Lock
} from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Biosecurity Fundamentals",
    description: "Learn the basics of farm biosecurity and disease prevention",
    duration: "2 hours",
    lessons: 8,
    progress: 100,
    completed: true,
    image: "🛡️",
    language: "Hindi, English",
    level: "Beginner"
  },
  {
    id: 2,
    title: "Poultry Disease Prevention",
    description: "Comprehensive guide to preventing common poultry diseases",
    duration: "3 hours",
    lessons: 12,
    progress: 65,
    completed: false,
    image: "🐔",
    language: "Hindi, English, Tamil",
    level: "Intermediate"
  },
  {
    id: 3,
    title: "Pig Farm Hygiene Protocols",
    description: "Best practices for maintaining hygiene in pig farms",
    duration: "2.5 hours",
    lessons: 10,
    progress: 30,
    completed: false,
    image: "🐷",
    language: "Hindi, English",
    level: "Intermediate"
  },
  {
    id: 4,
    title: "Emergency Response Training",
    description: "How to respond to disease outbreaks effectively",
    duration: "4 hours",
    lessons: 15,
    progress: 0,
    completed: false,
    image: "🚨",
    language: "Hindi, English, Marathi",
    level: "Advanced",
    locked: true
  },
  {
    id: 5,
    title: "Vaccination Best Practices",
    description: "Complete guide to livestock vaccination schedules",
    duration: "2 hours",
    lessons: 8,
    progress: 0,
    completed: false,
    image: "💉",
    language: "Hindi, English",
    level: "Beginner"
  },
  {
    id: 6,
    title: "Feed Management & Nutrition",
    description: "Optimize livestock health through proper nutrition",
    duration: "3 hours",
    lessons: 11,
    progress: 0,
    completed: false,
    image: "🌾",
    language: "Hindi, English, Telugu",
    level: "Intermediate"
  },
];

const achievements = [
  { icon: "🏆", title: "First Steps", description: "Complete your first course", earned: true },
  { icon: "⭐", title: "Quick Learner", description: "Complete 5 lessons in a day", earned: true },
  { icon: "🎯", title: "Perfect Score", description: "Get 100% on a quiz", earned: false },
  { icon: "🔥", title: "Streak Master", description: "7-day learning streak", earned: false },
];

const Training = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mb-12 animate-fade-in">
            <Badge className="mb-4 gradient-primary text-primary-foreground">
              <BookOpen className="w-3 h-3 mr-1" />
              Interactive Training
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Training Modules
            </h1>
            <p className="text-lg text-muted-foreground">
              Learn biosecurity best practices through interactive courses in your local language. 
              Complete quizzes to earn certifications and track your progress.
            </p>
          </div>

          {/* Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              { icon: BookOpen, label: "Courses Available", value: "12", color: "primary" },
              { icon: Trophy, label: "Courses Completed", value: "1", color: "secondary" },
              { icon: Clock, label: "Hours Learned", value: "4.5", color: "accent" },
              { icon: Star, label: "Average Score", value: "85%", color: "primary" },
            ].map((stat, index) => (
              <Card key={stat.label} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-4 flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    stat.color === "primary" ? "gradient-primary text-primary-foreground" :
                    stat.color === "secondary" ? "gradient-orange text-secondary-foreground" :
                    "bg-accent text-accent-foreground"
                  }`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Courses Grid */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-xl font-semibold text-foreground">All Courses</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {courses.map((course, index) => (
                  <Card 
                    key={course.id} 
                    className={`overflow-hidden hover-lift animate-fade-in ${course.locked ? "opacity-75" : ""}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="h-2 gradient-primary" />
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <span className="text-4xl">{course.image}</span>
                        {course.completed && (
                          <Badge className="bg-primary/10 text-primary">
                            <CheckCircle2 className="w-3 h-3 mr-1" />
                            Completed
                          </Badge>
                        )}
                        {course.locked && (
                          <Badge variant="secondary">
                            <Lock className="w-3 h-3 mr-1" />
                            Locked
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                      <CardDescription>{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {course.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-3 h-3" />
                          {course.lessons} lessons
                        </span>
                        <span className="flex items-center gap-1">
                          <Globe className="w-3 h-3" />
                          {course.language}
                        </span>
                      </div>

                      {course.progress > 0 && !course.completed && (
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="text-primary font-medium">{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                      )}

                      <Button 
                        className={`w-full ${course.locked ? "opacity-50 cursor-not-allowed" : ""}`}
                        variant={course.completed ? "outline" : "default"}
                        disabled={course.locked}
                      >
                        {course.locked ? (
                          <>
                            <Lock className="w-4 h-4 mr-2" />
                            Complete Prerequisites
                          </>
                        ) : course.completed ? (
                          <>
                            <Play className="w-4 h-4 mr-2" />
                            Review Course
                          </>
                        ) : course.progress > 0 ? (
                          <>
                            <Play className="w-4 h-4 mr-2" />
                            Continue Learning
                          </>
                        ) : (
                          <>
                            <Play className="w-4 h-4 mr-2" />
                            Start Course
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Achievements */}
              <Card className="animate-fade-in delay-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-secondary" />
                    Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {achievements.map((achievement) => (
                    <div 
                      key={achievement.title}
                      className={`flex items-center gap-3 p-3 rounded-lg ${
                        achievement.earned ? "bg-primary/5" : "bg-muted/50 opacity-50"
                      }`}
                    >
                      <span className="text-2xl">{achievement.icon}</span>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{achievement.title}</p>
                        <p className="text-xs text-muted-foreground">{achievement.description}</p>
                      </div>
                      {achievement.earned && (
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Leaderboard */}
              <Card className="animate-fade-in delay-400">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Leaderboard
                  </CardTitle>
                  <CardDescription>Top learners this month</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { rank: 1, name: "Amit Kumar", score: 2450, avatar: "AK" },
                    { rank: 2, name: "Priya Singh", score: 2280, avatar: "PS" },
                    { rank: 3, name: "Raj Sharma", score: 2150, avatar: "RS" },
                    { rank: 4, name: "Neha Patel", score: 1890, avatar: "NP" },
                    { rank: 5, name: "Vikram Rao", score: 1750, avatar: "VR" },
                  ].map((user) => (
                    <div key={user.rank} className="flex items-center gap-3">
                      <span className={`w-6 text-center font-bold ${
                        user.rank === 1 ? "text-secondary" :
                        user.rank === 2 ? "text-muted-foreground" :
                        user.rank === 3 ? "text-accent" :
                        "text-muted-foreground"
                      }`}>
                        {user.rank === 1 ? "🥇" : user.rank === 2 ? "🥈" : user.rank === 3 ? "🥉" : user.rank}
                      </span>
                      <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-xs text-primary-foreground font-medium">
                        {user.avatar}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{user.name}</p>
                      </div>
                      <span className="text-sm font-semibold text-primary">{user.score}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Training;
