import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Star, ExternalLink, BookOpen, Pen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "The Scouts - Janice Wee",
  description: "A delightful bedtime story about a hen, a squirrel and a mongoose who set off to find hope for their friends and family in Long Hill.",
}

export default function TheScoutsPage() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Book Header */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-1">
              <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/scouts-1760410358286.jpg"
                  alt="The Scouts"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold text-primary mb-2">The Scouts</h1>
              <p className="text-lg text-muted-foreground mb-6">Short Stories From Long Hill Series</p>
              
              <p className="text-xl text-foreground mb-6 leading-relaxed">
                A delightful bedtime story about a hen, a squirrel and a mongoose who set off to find hope for their friends and family in Long Hill. It's a delightful tale of friendship, misunderstandings and sacrifice.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href="https://books2read.com/u/bMEzja" target="_blank" rel="noopener noreferrer">
                    Buy on Books2Read
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://www.barnesandnoble.com/w/the-scouts-janice-wee/1145466473" target="_blank" rel="noopener noreferrer">
                    Barnes & Noble
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://www.kobo.com/sg/en/ebook/the-scouts-3" target="_blank" rel="noopener noreferrer">
                    Kobo
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://www.amazon.com.au/Scouts-4-Janice-Wee/dp/B0D2GZ1DL1" target="_blank" rel="noopener noreferrer">
                    Amazon
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Book Description */}
          <section className="mb-12">
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-primary mb-6">About This Book</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed">
                  A delightful bedtime story about a hen, a squirrel and a mongoose who set off to find hope for their friends and family in Long Hill. It's a delightful tale of friendship, misunderstandings and sacrifice.
                </p>
              </div>
            </Card>
          </section>

          {/* Book Excerpt */}
          <section className="mb-12">
            <Card className="p-8 bg-muted/30">
              <div className="flex items-center mb-6">
                <BookOpen className="h-6 w-6 text-primary mr-3" />
                <h2 className="text-3xl font-bold text-primary">Excerpt</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed italic">
                  "Monroe, old buddy!" A big bluebird hopped out of a cavern. That had to be where the bluebird community built their nests.
                </p>
                <p className="text-foreground leading-relaxed italic mt-4">
                  "Blake! It's been too long," Monroe hugged his friend. "My friends and I are on a life-saving mission."
                </p>
                <p className="text-foreground leading-relaxed italic mt-4">
                  "Do tell," Blake gestured the trio towards his home.
                </p>
                <p className="text-foreground leading-relaxed italic mt-4">
                  A sudden rush of air made Hannah's feathers stand.
                </p>
                <p className="text-foreground leading-relaxed italic mt-4">
                  Without warning, eagle swooped from the sky. Its outstretch talons grabbed Simon.
                </p>
              </div>
            </Card>
          </section>

          {/* Author's Notes */}
          <section className="mb-12">
            <Card className="p-8 border-primary/20">
              <div className="flex items-center mb-6">
                <Pen className="h-6 w-6 text-primary mr-3" />
                <h2 className="text-3xl font-bold text-primary">Author's Notes</h2>
              </div>
              <p className="text-foreground leading-relaxed">
                Monroe Mongoose is the hero of this story. He's fearless and fights off the snakes that want the trio dead. More than that. He's prepared to sacrifice himself for the sake of his friends, so that his beloved community at Long Hill can survive.
              </p>
            </Card>
          </section>

          {/* ISBN Section */}
          <section className="mt-12">
            <Card className="p-6 bg-muted/20">
              <h3 className="text-lg font-semibold text-primary mb-3">Publication Details</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>
                  <span className="font-semibold">Ebook ISBN:</span> 9798224401710
                </div>
                <div>
                  <span className="font-semibold">Paperback ISBN:</span> 9798224313747
                </div>
              </div>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}