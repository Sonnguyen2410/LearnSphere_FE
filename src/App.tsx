import { HomePage } from './pages/HomePage';
import { AIAssistantPage } from './pages/AIAssistantPage';
import { CourseCatalogPage } from './pages/CourseCatalogPage';
import { DashboardPage } from './pages/DashboardPage';
import { LessonDetailPage } from './pages/LessonDetailPage';
import { LessonManagementPage } from './pages/LessonManagementPage';
import { LoginPage } from './pages/LoginPage';
import { QuizPage } from './pages/QuizPage';
import { QuestionBuilderPage } from './pages/QuestionBuilderPage';
import { SignupPage } from './pages/SignupPage';
import { SystemMonitoringPage } from './pages/SystemMonitoringPage';

export default function App() {
  const pathname = window.location.pathname;

  if (pathname === '/dashboard') {
    return <DashboardPage />;
  }

  if (pathname === '/ai-assistant') {
    return <AIAssistantPage />;
  }

  if (pathname === '/courses') {
    return <CourseCatalogPage />;
  }

  if (pathname === '/lesson-detail') {
    return <LessonDetailPage />;
  }

  if (pathname === '/lesson-management') {
    return <LessonManagementPage />;
  }

  if (pathname === '/quiz') {
    return <QuizPage />;
  }

  if (pathname === '/question-builder') {
    return <QuestionBuilderPage />;
  }

  if (pathname === '/system-monitoring') {
    return <SystemMonitoringPage />;
  }

  if (pathname === '/login') {
    return <LoginPage />;
  }

  if (pathname === '/signup') {
    return <SignupPage />;
  }

  return <HomePage />;
}
