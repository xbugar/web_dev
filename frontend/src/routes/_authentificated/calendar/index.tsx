import { createFileRoute, Navigate } from '@tanstack/react-router';

export const Route = createFileRoute('/_authentificated/calendar/')({
  component: () => <Navigate to="/calendar/$calendarDay" params={{ calendarDay: "today" }} />,
});