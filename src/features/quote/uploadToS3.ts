/**
 * Upload a file to S3 using presigned URL
 * @param file - The file to upload
 * @returns The filename that was uploaded
 */
export async function uploadToS3(file: File): Promise<string> {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || ''

    // Step 1: Get presigned URL from backend
    const presignedRes = await fetch(
        `${apiUrl}/api/upload/${encodeURIComponent(file.name)}`,
        { method: 'GET' }
    )

    if (!presignedRes.ok) {
        throw new Error('Failed to get upload URL')
    }

    const data = await presignedRes.json()
    const uploadUrl = data.url || data

    // Step 2: Upload file directly to S3
    const uploadRes = await fetch(uploadUrl, {
        method: 'PUT',
        body: file,
        headers: {
            'Content-Type': file.type || 'application/octet-stream',
        },
    })

    if (!uploadRes.ok) {
        throw new Error('Failed to upload file to S3')
    }

    return file.name
}
