import React from 'react';

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 */
export default function Logo({ fill = "white" }) {
  return (
    <svg viewBox="0 0 490 490" height="35px">
      <path
        fill={fill}
        d="M23.968,122.5v245L245,490l221.032-122.5v-245L245,0L23.968,122.5z M331.299,292.828L245,340.656l-86.299-47.828v-95.657
		L245,149.343l86.299,47.828V292.828z"
      />
    </svg>
  );
}
