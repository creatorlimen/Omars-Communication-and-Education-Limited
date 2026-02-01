import { kv } from '@vercel/kv';
import { NextRequest, NextResponse } from 'next/server';

interface ContactSubmission {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  submittedAt: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create new submission
    const id = `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const submission: ContactSubmission = {
      id,
      firstName,
      lastName,
      email,
      phone: phone || '',
      message,
      submittedAt: new Date().toISOString(),
    };

    // Save to Vercel KV
    await kv.hset(`submission:${id}`, {
      id: submission.id,
      firstName: submission.firstName,
      lastName: submission.lastName,
      email: submission.email,
      phone: submission.phone,
      message: submission.message,
      submittedAt: submission.submittedAt,
    });
    
    // Add to list of all submissions for easy retrieval
    await kv.lpush('submissions:all', id);

    console.log('📩 New contact submission saved:', id);

    return NextResponse.json(
      { success: true, message: 'Submission received successfully', id },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Error saving submission:', error);
    return NextResponse.json(
      { error: 'Failed to save submission' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Get all submission IDs
    const submissionIds = await kv.lrange('submissions:all', 0, -1);
    
    if (!submissionIds || submissionIds.length === 0) {
      return NextResponse.json([], { status: 200 });
    }

    // Fetch all submissions
    const submissions = await Promise.all(
      submissionIds.map(async (id) => {
        const submission = await kv.hgetall(`submission:${id}`);
        return submission;
      })
    );

    // Filter out any null values
    const validSubmissions = submissions.filter(Boolean);

    return NextResponse.json(validSubmissions, { status: 200 });
  } catch (error) {
    console.error('❌ Error reading submissions:', error);
    return NextResponse.json(
      { error: 'Failed to read submissions' },
      { status: 500 }
    );
  }
}
