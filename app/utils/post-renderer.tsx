import RichText from '@/app/web-components/RichText';
import ImageSlider from '@/app/web-components/ImageSlider';
import Quote from '@/app/web-components/Quote';
import Media from '@/app/web-components/Media';
import VideoEmbed from '@/app/web-components/VideoEmbed';

export function postRenderer(section: any, index: number) {
  switch (section.__component) {
    case 'shared.rich-text':
      return <RichText key={index} data={section} />;
    case 'shared.slider':
      return <ImageSlider key={index} data={section} />;
    case 'shared.quote':
      return <Quote key={index} data={section} />;
    case 'shared.media':
      return <Media key={index} data={section} />;
    case 'shared.video-embed':
      return <VideoEmbed key={index} data={section} />;
    default:
      return null;
  }
}
