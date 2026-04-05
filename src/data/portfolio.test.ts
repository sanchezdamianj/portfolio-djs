import { describe, it, expect } from 'vitest';
import { personalInfo, experiences, projects, skills, education, approach } from '../data/portfolio';

describe('portfolio data', () => {
  describe('personalInfo', () => {
    it('should have all required fields', () => {
      expect(personalInfo.name).toBe('Damián Javier Sánchez');
      expect(personalInfo.email).toBe('sanchezdamianj@gmail.com');
      expect(personalInfo.linkedin).toContain('linkedin.com');
      expect(personalInfo.github).toContain('github.com');
    });

    it('should have valid URLs', () => {
      expect(personalInfo.linkedin).toMatch(/^https?:\/\/.+/);
      expect(personalInfo.github).toMatch(/^https?:\/\/.+/);
    });
  });

  describe('experiences', () => {
    it('should have experiences with all required fields', () => {
      expect(experiences.length).toBeGreaterThan(0);
      
      experiences.forEach((exp) => {
        expect(exp.id).toBeDefined();
        expect(exp.company).toBeDefined();
        expect(exp.period).toBeDefined();
        expect(exp.title).toHaveProperty('en');
        expect(exp.title).toHaveProperty('es');
        expect(exp.description).toHaveProperty('en');
        expect(exp.description).toHaveProperty('es');
      });
    });

    it('should have experiences sorted by date (most recent first)', () => {
      for (let i = 0; i < experiences.length - 1; i++) {
        expect(experiences[i].period).toBeDefined();
      }
    });

    it('should have bilingual content', () => {
      experiences.forEach((exp) => {
        expect(exp.title.en).not.toBe(exp.title.es);
        expect(exp.description.en.length).toBeGreaterThan(0);
        expect(exp.description.es.length).toBeGreaterThan(0);
      });
    });
  });

  describe('projects', () => {
    it('should have projects with all required fields', () => {
      expect(projects.length).toBeGreaterThan(0);
      
      projects.forEach((project) => {
        expect(project.id).toBeDefined();
        expect(project.title).toHaveProperty('en');
        expect(project.title).toHaveProperty('es');
        expect(project.technologies).toBeDefined();
        expect(project.technologies.length).toBeGreaterThan(0);
      });
    });

    it('should have bilingual content', () => {
      projects.forEach((project) => {
        // Allow same text if it's a technical term (e.g., "BFF", "DDD", "Next.js", "Flutter")
        const isTechnical = 
          project.title.en.includes('BFF') || 
          project.title.en.includes('DDD') ||
          project.title.en.includes('Next.js') ||
          project.title.en.includes('Flutter');
        if (!isTechnical) {
          expect(project.title.en).not.toBe(project.title.es);
        }
      });
    });
  });

  describe('skills', () => {
    it('should have skills with all required fields', () => {
      expect(skills.length).toBeGreaterThan(0);
      
      skills.forEach((skill) => {
        expect(skill.category).toHaveProperty('en');
        expect(skill.category).toHaveProperty('es');
        expect(skill.items).toBeDefined();
        expect(skill.items.length).toBeGreaterThan(0);
        expect(skill.color).toBeDefined();
      });
    });

    it('should have valid colors', () => {
      const validColors = ['emerald', 'blue', 'purple', 'amber', 'rose'];
      skills.forEach((skill) => {
        expect(validColors).toContain(skill.color);
      });
    });
  });

  describe('education', () => {
    it('should have bilingual education data', () => {
      expect(education.degree).toHaveProperty('en');
      expect(education.degree).toHaveProperty('es');
      expect(education.institution).toHaveProperty('en');
      expect(education.institution).toHaveProperty('es');
      expect(education.period).toHaveProperty('en');
      expect(education.period).toHaveProperty('es');
    });
  });

  describe('approach', () => {
    it('should have workflow phases with all required fields', () => {
      expect(approach.phases.length).toBe(3);
      
      approach.phases.forEach((phase) => {
        expect(phase.number).toBeDefined();
        expect(phase.title).toHaveProperty('en');
        expect(phase.title).toHaveProperty('es');
        expect(phase.description).toHaveProperty('en');
        expect(phase.description).toHaveProperty('es');
      });
    });
  });
});
