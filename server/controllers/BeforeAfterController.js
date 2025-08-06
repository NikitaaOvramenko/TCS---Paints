const uuid = require('uuid')
const supabase = require('../supabase')
const { BeforeAfterPic } = require('../models/models')

class BeforeAfterController {
  async getAll(req, res) {
    const all = await BeforeAfterPic.findAll({ where: {} })
    return res.json(all)
  }

  async create(req, res) {
    try {
      const { name, type } = req.body
      const { beforePic, afterPic } = req.files

      const bucketName = 'media'

      // Generate unique names
      const beforeName = `beforePics/${uuid.v4()}.jpg`
      const afterName = `afterPics/${uuid.v4()}.jpg`

      // Upload beforePic
      const { data: beforeData, error: beforeError } = await supabase.storage
        .from(bucketName)
        .upload(beforeName, beforePic.data, {
          contentType: beforePic.mimetype,
        })

      if (beforeError) return res.status(500).json({ error: beforeError.message })

      // Upload afterPic
      const { data: afterData, error: afterError } = await supabase.storage
        .from(bucketName)
        .upload(afterName, afterPic.data, {
          contentType: afterPic.mimetype,
        })

      if (afterError) return res.status(500).json({ error: afterError.message })

      // Get public URLs
      const beforeUrl = supabase.storage.from(bucketName).getPublicUrl(beforeName).data.publicUrl
      const afterUrl = supabase.storage.from(bucketName).getPublicUrl(afterName).data.publicUrl

      const newPic = await BeforeAfterPic.create({
        name,
        type,
        beforePic: beforeUrl,
        afterPic: afterUrl,
      })

      return res.json(newPic)
    } catch (error) {
      return res.status(500).json({ error: error.message || error })
    }
  }

  async deleteAll(req, res) {
    const deleted = await BeforeAfterPic.destroy({ where: {} })
    return res.json(deleted)
  }
}

module.exports = new BeforeAfterController()
