'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  MapPin,
  Mail,
  Phone,
  Send,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Building2,
  ArrowRight,
} from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function ContactPage() {
  const searchParams = useSearchParams();
  const initialProd = searchParams.get('product') || '';
  const initialSubject = searchParams.get('subject') || '';

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    enquiryType: initialSubject.startsWith('leadership_')
      ? 'Corporate & Logistics'
      : 'Product Enquiries',
    productService: initialProd,
    quantity: '',
    destinationMarket: '',
    message: initialSubject.startsWith('leadership_')
      ? `Corporate partnership enquiry regarding ${initialSubject.replace('leadership_', '')}`
      : '',
  });

  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const prod = searchParams.get('product');
    const subj = searchParams.get('subject');
    if (prod) {
      setFormData((prev) => ({ ...prev, productService: prod }));
    }
    if (subj && subj.startsWith('leadership_')) {
      setFormData((prev) => ({
        ...prev,
        enquiryType: 'Corporate & Logistics',
        message: `Corporate partnership enquiry regarding ${subj.replace('leadership_', '')}`,
      }));
    }
  }, [searchParams]);

  const helpOptions = [
    {
      title: 'Product Enquiries',
      description:
        'Ask about specifications, grading, and availability for dry seafood, sea cucumber, fish maw, grouper fish, meat, vegetable powders, and fruit powders.',
    },
    {
      title: 'Sourcing Requirements',
      description:
        'Share your specific custom product volume requirements and let our procurement team explore verified sourcing opportunities.',
    },
    {
      title: 'Import & Export Compliance',
      description:
        'Discuss East Asian phytosanitary documentation, e-Phyto requirements, origin certificates, and cross-border customs planning.',
    },
    {
      title: 'Logistics Coordination',
      description:
        'Enquire about port-to-port vessel assignment, container allotment, and refrigerated / shelf-stable maritime shipping coordination.',
    },
    {
      title: 'Business Partnerships',
      description:
        'Explore opportunities to work with Naval Treasure Group as a regional supplier, institutional distributor, importer, exporter, or logistics associate.',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSubmitted(true);
    } catch (err) {
      setErrorMsg('Failed to send inquiry. Please email ntgseafoods@gmail.com directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#f4f4f5] text-[#09090b] min-h-screen pb-24">
      {/* 1. COMPACT HERO */}
      <section className="bg-white border-b border-[#ececee] pt-16 pb-16 md:pt-20 md:pb-20">
        <ScrollReveal animation="fade-up">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[12px] bg-[#f4f4f5] border border-[#ececee] text-xs font-bold text-[#09090b] uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-[#ff5a00]" />
              TRADE COORDINATION OFFICE
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08] text-[#09090b]">
              Let's Start a Conversation
            </h1>
            <p className="mt-5 text-base md:text-lg text-[#52525b] leading-relaxed">
              Whether you are looking for food product supply, custom sourcing, customs compliance support, container logistics, or a commercial partnership, our team is ready to assist.
            </p>
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* 2. MAIN TWO-COLUMN SECTION (ACCORDION LEFT + FORM RIGHT) */}
      <section className="py-16 bg-[#f4f4f5]">
        <ScrollReveal animation="fade-up" delay={60}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Interactive Accordion + Direct Contact Card */}
            <div className="lg:col-span-5 space-y-6">
              {/* Interactive Help Accordion */}
              <div className="bg-white rounded-[36px] border border-[#ececee] p-8">
                <span className="inline-block px-3 py-1 rounded-[12px] bg-[#f4f4f5] border border-[#ececee] text-xs font-bold text-[#09090b] uppercase tracking-wider mb-4">
                  HOW WE CAN HELP
                </span>
                <h2 className="text-xl font-bold text-[#09090b] mb-6">
                  What Can We Help You With?
                </h2>
                <div className="space-y-3">
                  {helpOptions.map((opt, idx) => {
                    const isOpen = openAccordion === idx;
                    return (
                      <div
                        key={opt.title}
                        className="border border-[#ececee] rounded-[18px] overflow-hidden transition-colors"
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setOpenAccordion(isOpen ? null : idx)
                          }
                          className="w-full px-5 py-4 flex items-center justify-between text-left font-bold text-sm text-[#09090b] hover:bg-[#f4f4f5] transition-colors"
                        >
                          <span>{opt.title}</span>
                          {isOpen ? (
                            <ChevronUp className="w-4 h-4 text-[#ff5a00]" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-[#71717a]" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-4 text-xs text-[#52525b] leading-relaxed border-t border-[#ececee] pt-3 bg-[#f4f4f5]/50">
                            {opt.description}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Direct Office Contact Card */}
              <div className="bg-[#09090b] text-white rounded-[36px] border border-[#27272a] p-8">
                <span className="inline-block px-3 py-1 rounded-[12px] bg-[#27272a] text-xs font-bold text-[#ff5a00] uppercase tracking-wider mb-4">
                  DIRECT CONTACT
                </span>
                <h3 className="text-xl font-bold text-white mb-1">
                  Naval Treasure Group
                </h3>
                <p className="text-xs text-[#a1a1aa] mb-6">
                  INTERNATIONAL SDN BHD
                </p>

                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#ff5a00] shrink-0 mt-0.5" />
                    <p className="text-white leading-relaxed">
                      No-13A-2, Block C, Jalan Atmospher, 6 Pusat Perniagaan The Atmosphere, Jalan Putra Permai, Seri Kembangan, Selangor 43300, Malaysia
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#ff5a00] shrink-0" />
                    <a
                      href="tel:+60109156129"
                      className="text-white hover:text-[#ff5a00] font-semibold transition-colors"
                    >
                      +60 10 915 6129
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#ff5a00] shrink-0" />
                    <a
                      href="mailto:ntgseafoods@gmail.com"
                      className="text-white hover:text-[#ff5a00] font-semibold transition-colors"
                    >
                      ntgseafoods@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Complete 10-Field Streamlined Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[36px] border border-[#ececee] p-8 md:p-12">
                <span className="inline-block px-3 py-1 rounded-[12px] bg-[#f4f4f5] border border-[#ececee] text-xs font-bold text-[#09090b] uppercase tracking-wider mb-3">
                  TRADE ENQUIRY FORM
                </span>
                <h2 className="text-2xl font-bold text-[#09090b] mb-2">
                  Send Us Your Requirements
                </h2>
                <p className="text-xs text-[#52525b] mb-8">
                  Complete the 10 fields below for a rapid quotation and phytosanitary audit overview.
                </p>

                {submitted ? (
                  <div className="bg-[#f4f4f5] rounded-[24px] border border-[#ececee] p-10 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-white text-[#ff5a00] flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#09090b]">
                      Enquiry Received
                    </h3>
                    <p className="text-xs text-[#52525b] max-w-md mx-auto leading-relaxed">
                      Thank you for contacting Naval Treasure Group International Sdn Bhd. Our trade coordination team will review your requirements and get in touch shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-bold text-[#ff5a00] hover:underline"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Row 1: Full Name & Company Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#09090b] uppercase tracking-wider mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({ ...formData, fullName: e.target.value })
                          }
                          placeholder="e.g. Robert Vance"
                          className="w-full px-4 py-3 rounded-[14px] bg-[#f4f4f5] border border-[#ececee] text-xs text-[#09090b] placeholder-[#a1a1aa] focus:outline-none focus:ring-1 focus:ring-[#09090b]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#09090b] uppercase tracking-wider mb-1.5">
                          Company Name
                        </label>
                        <input
                          type="text"
                          value={formData.companyName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              companyName: e.target.value,
                            })
                          }
                          placeholder="e.g. Pacific Foods Ltd."
                          className="w-full px-4 py-3 rounded-[14px] bg-[#f4f4f5] border border-[#ececee] text-xs text-[#09090b] placeholder-[#a1a1aa] focus:outline-none focus:ring-1 focus:ring-[#09090b]"
                        />
                      </div>
                    </div>

                    {/* Row 2: Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#09090b] uppercase tracking-wider mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="r.vance@pacificfoods.com"
                          className="w-full px-4 py-3 rounded-[14px] bg-[#f4f4f5] border border-[#ececee] text-xs text-[#09090b] placeholder-[#a1a1aa] focus:outline-none focus:ring-1 focus:ring-[#09090b]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#09090b] uppercase tracking-wider mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="+65 6789 0123"
                          className="w-full px-4 py-3 rounded-[14px] bg-[#f4f4f5] border border-[#ececee] text-xs text-[#09090b] placeholder-[#a1a1aa] focus:outline-none focus:ring-1 focus:ring-[#09090b]"
                        />
                      </div>
                    </div>

                    {/* Row 3: Country & Enquiry Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#09090b] uppercase tracking-wider mb-1.5">
                          Country *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.country}
                          onChange={(e) =>
                            setFormData({ ...formData, country: e.target.value })
                          }
                          placeholder="e.g. Malaysia, Singapore, Japan"
                          className="w-full px-4 py-3 rounded-[14px] bg-[#f4f4f5] border border-[#ececee] text-xs text-[#09090b] placeholder-[#a1a1aa] focus:outline-none focus:ring-1 focus:ring-[#09090b]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#09090b] uppercase tracking-wider mb-1.5">
                          Enquiry Type *
                        </label>
                        <select
                          value={formData.enquiryType}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              enquiryType: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 rounded-[14px] bg-[#f4f4f5] border border-[#ececee] text-xs text-[#09090b] focus:outline-none focus:ring-1 focus:ring-[#09090b]"
                        >
                          <option value="Product Enquiries">Product Enquiries</option>
                          <option value="Sourcing Requirements">Sourcing Requirements</option>
                          <option value="Import & Export">Import & Export</option>
                          <option value="Logistics Coordination">Logistics Coordination</option>
                          <option value="Business Partnerships">Business Partnerships</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 4: Product/Service Required & Quantity */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#09090b] uppercase tracking-wider mb-1.5">
                          Product / Service Required *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.productService}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              productService: e.target.value,
                            })
                          }
                          placeholder="e.g. Dried Sea Cucumber / Vegetable Powder"
                          className="w-full px-4 py-3 rounded-[14px] bg-[#f4f4f5] border border-[#ececee] text-xs text-[#09090b] placeholder-[#a1a1aa] focus:outline-none focus:ring-1 focus:ring-[#09090b]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#09090b] uppercase tracking-wider mb-1.5">
                          Quantity or Volume
                        </label>
                        <input
                          type="text"
                          value={formData.quantity}
                          onChange={(e) =>
                            setFormData({ ...formData, quantity: e.target.value })
                          }
                          placeholder="e.g. 10 Metric Tons / 2x20ft Containers"
                          className="w-full px-4 py-3 rounded-[14px] bg-[#f4f4f5] border border-[#ececee] text-xs text-[#09090b] placeholder-[#a1a1aa] focus:outline-none focus:ring-1 focus:ring-[#09090b]"
                        />
                      </div>
                    </div>

                    {/* Row 5: Destination Market */}
                    <div>
                      <label className="block text-xs font-bold text-[#09090b] uppercase tracking-wider mb-1.5">
                        Destination Market *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.destinationMarket}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            destinationMarket: e.target.value,
                          })
                        }
                        placeholder="e.g. Port Klang Malaysia / Hong Kong Port / Singapore"
                        className="w-full px-4 py-3 rounded-[14px] bg-[#f4f4f5] border border-[#ececee] text-xs text-[#09090b] placeholder-[#a1a1aa] focus:outline-none focus:ring-1 focus:ring-[#09090b]"
                      />
                    </div>

                    {/* Row 6: Message / Requirements */}
                    <div>
                      <label className="block text-xs font-bold text-[#09090b] uppercase tracking-wider mb-1.5">
                        Message / Requirements *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Please describe your specific grade, specification, timetable, and documentation requirements..."
                        className="w-full px-4 py-3 rounded-[14px] bg-[#f4f4f5] border border-[#ececee] text-xs text-[#09090b] placeholder-[#a1a1aa] focus:outline-none focus:ring-1 focus:ring-[#09090b]"
                      />
                    </div>

                    {errorMsg && (
                      <p className="text-xs font-semibold text-red-600">
                        {errorMsg}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-[14px] bg-[#09090b] text-white text-xs font-bold shadow-btn-dark hover:bg-[#18181b] transition-all flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Sending Enquiry...</span>
                      ) : (
                        <>
                          <span>Send Trade Enquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
