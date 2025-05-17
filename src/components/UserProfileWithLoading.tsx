import withLoading from './withLoading';
import UserProfile from './UserProfile';

// Wrap UserProfile with withLoading HOC
export const UserProfileWithLoading = withLoading(UserProfile);