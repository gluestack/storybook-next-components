import StatsWithCTA from './storybooks/GluestackUiPro/ApplicationStats/StatsWithCTA';
import StatsWithDivider from './storybooks/GluestackUiPro/ApplicationStats/StatsWithDivider';
import StatsWithIcon from './storybooks/GluestackUiPro/ApplicationStats/StatsWithIcon';
import StatsWithLabel from './storybooks/GluestackUiPro/ApplicationStats/StatsWithLabel';
import StatsWithProgressBar from './storybooks/GluestackUiPro/ApplicationStats/StatsWithProgressBar';
import StatsWithRateBadge from './storybooks/GluestackUiPro/ApplicationStats/StatsWithRateBadge';
import { BlogWithSingleColumn, BlogWithThreeColumns } from './storybooks/GluestackUiPro/Blog/Blog.stories';
import BlogWithCards from "./storybooks/GluestackUiPro/Blog/BlogWithCards";
import BlogWithHeroImage from './storybooks/GluestackUiPro/Blog/BlogWithHeroImage';
export { config } from './storybooks/StartupPlus/gluestack-ui.config';

export default {
  // ApplicationStats ===========================
  StatsWithCTA: {
    story: StatsWithCTA,
  },
  StatsWithDivider: {
    story: StatsWithDivider,
  },
  StatsWithIcon: {
    story: StatsWithIcon,
  },
  StatsWithLabel: {
    story: StatsWithLabel,
  },
  StatsWithProgressBar: {
    story: StatsWithProgressBar,
  },
  StatsWithRateBadge: {
    story: StatsWithRateBadge,
  },
  // Blogs ===========================
  BlogWithCards: {
    story: BlogWithCards,
  },
  BlogWithHeroImage: {
    story: BlogWithHeroImage,
  },
  BlogWithSingleColumn: {
    story: BlogWithSingleColumn,
  },
  BlogWithThreeColumns: {
    story: BlogWithThreeColumns,
  },
} as any;
