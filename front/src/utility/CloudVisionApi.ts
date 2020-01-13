import Environment from '@/utility/environments';

export const sendCloudVision = async (image: string) => {
  const body = JSON.stringify({
    requests: [
      {
        features: [{ type: 'TEXT_DETECTION', maxResults: 10 }],
        image: {
          content: image,
        },
      },
    ],
  });

  const response = await fetch(
    'https://vision.googleapis.com/v1/images:annotate?key=' + Environment['GOOGLE_CLOUD_VISION_API_KEY'],
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: body,
    }
  );
  const resJson = await response.json();
  return resJson;
};
